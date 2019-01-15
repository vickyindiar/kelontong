import React, { Component } from 'react'
import RowTable from './RowTable'

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            header : [],
            data: []
        }
    }
 componentWillReceiveProps(props){
      this.setState({data : props.dataSource  });
      if(this.state.data.length > 0){
        this.setState({header : Object.keys(props.dataSourc[0]) });
      }
  }
  render() {
    const headerL = this.state.header.map((v, i)=> (<th key={ i }> {v}  </th>));
    const bodyL = this.state.data.map((v, i) => 
    (
        < RowTable data={v} id = {i} key={i} />
     ))
    return (
        <table className="striped highlight responsive-table">
                <thead>
                <tr>
                    {
                         headerL
                    }
                </tr>
                </thead>
                <tbody>
                    {  bodyL }
                </tbody>
        </table>

    )
  }
}

export default Table
