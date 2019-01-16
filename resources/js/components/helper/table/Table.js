import React, { Component } from 'react'
import RowTable from './RowTable'
import FilterTable from './FilterTable';
import './table.css';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            header : [],
            data: [],
            currentData: []
        }
    }
 componentWillReceiveProps(props){
    const { dataSource } = props;
    if(dataSource.length){
        this.setState({header : Object.keys(dataSource[0]), data: dataSource, currentData: dataSource });
    }
  }
  render() {
    const headerL = this.state.header.map((v, i) => 
    (
          <th key={ i }> {v}  </th>
    ));
    const bodyL = this.state.currentData.map((v, i) => 
    (
          < RowTable data={v} id = {i} key={i} />
    ));
    return (
     <div className="container">
        <div className="row">
             <div className="col s12">
                 <div className="card material-table">

                     <div className="table-header">
                         <span className="table-title">Material Datatable</span>
                         <FilterTable data= { this.props.data } filter={ this.doFilter } />
                     </div>

                     <div className="card-content">
                        <div className="table-responsive">
                            <table className="table table-hover table-bordered results centered highlight responsive-table">
                                    <thead>
                                        <tr>
                                        { headerL }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {  bodyL }
                                    </tbody>
                            </table>
                        </div>
                     </div>

                 </div>
             </div>
         </div>
     </div>

    )
  }
}

export default Table
