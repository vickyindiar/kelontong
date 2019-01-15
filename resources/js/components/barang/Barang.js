import React, { Component } from 'react';
import Table from '../helper/table/Table';
import Axios from 'axios';

export default class Barang extends Component {
  constructor(){
    super();
    this.state = {
      barang: [],
    }
  }

  componentDidMount(){
      Axios.get('http://127.0.0.1:8000/barang')
      .then(result=>{
        this.setState({barang: result.data});
      })
      .catch(function(error){
      });

  }

  render() {
    return (
      <div>
         <Table dataSource = {this.state.barang} /> 
      </div>
    )
  }
}