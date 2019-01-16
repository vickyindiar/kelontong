import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './dashboard/Dashboard';
import Barang from './barang/Barang';
import Penjualan from './penjualan/Penjualan';
import Pembelian from './pembelian/Pembelian';
import Laporan from './laporan/Laporan';
import Info from './info/Info';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export default class Index extends Component {
    render() {
        return (
            <BrowserRouter >
                <div className="content">
                    <Header />
                    <main className="container">
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route path='/penjualan' component={Penjualan} />
                            <Route path='/pembelian' component={Pembelian} />
                            <Route path='/laporan' component={Laporan} />
                            <Route path='/barang' component={Barang} />
                            <Route path='/info' component={Info} />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

const theme = createMuiTheme({ typography: { useNextVariants: true } });

if (document.getElementById('app')) {
    ReactDOM.render(  
    <ThemeProvider theme={theme}>
          <Index />
    </ThemeProvider>, document.getElementById('app'));
}
