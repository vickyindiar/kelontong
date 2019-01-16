import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Barang extends Component {
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
    const CustomTableCell = withStyles(theme => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: { fontSize: 14 },
    }))(TableCell);
 
    return (
      <div>
         {/* <Table dataSource = {this.state.barang} />  */}
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Nama</CustomTableCell>
                    <CustomTableCell align="right">Harga Beli (Rp.)</CustomTableCell>
                    <CustomTableCell align="right">Harga Jual (Rp.)</CustomTableCell>
                    <CustomTableCell align="right">Stok</CustomTableCell>
                    <CustomTableCell>Satuan</CustomTableCell>
                    <CustomTableCell>Kategori</CustomTableCell>
                    <CustomTableCell>Pemasok</CustomTableCell>
                    <CustomTableCell>Keterangan</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {  
                    this.state.barang.map(row => (
                    <TableRow key={row.id}>
                      <CustomTableCell component="th" scope="row">{row.nama} </CustomTableCell>
                      <CustomTableCell align="right">{row.harga_beli}</CustomTableCell>
                      <CustomTableCell align="right">{row.harga_jual}</CustomTableCell>
                      <CustomTableCell align="right">{row.stok}</CustomTableCell>
                      <CustomTableCell align="right">{row.satuan}</CustomTableCell>
                      <CustomTableCell align="right">{row.kategori}</CustomTableCell>
                      <CustomTableCell align="right">{row.pemasok}</CustomTableCell>
                      <CustomTableCell align="right">{row.keterangan}</CustomTableCell>
                    </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Paper>
        </div>
    )
  }
}

// CustomizedTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {  minWidth: 700, },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withStyles(styles)(Barang)