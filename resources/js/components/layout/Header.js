import React, { Component } from 'react'
import {Link, NavLink } from 'react-router-dom';
import $ from 'jquery';

export default class Header extends Component {
  componentDidMount(){
    var el = document.querySelector('.dropdown-trigger');
    var instance = M.Dropdown.init(el);
  }

  render() {
    return (
        <header>
          <ul id="dropdown-barang" className="dropdown-content">
            <li><NavLink to='/barang'>Barang</NavLink></li>
            <li><NavLink to='#!'>Kategori</NavLink></li>
            <li className="divider"></li>
            <li><NavLink to='#!'>Pelanggan</NavLink></li>
            <li><NavLink to='#!'>Pemasok</NavLink></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <Link to='/' className='brand-logo right'>Kelontong</Link>
              <ul className='left'>
                <li> <NavLink to='/penjualan'>Penjualan</NavLink>  </li>
                <li> <NavLink to='/pembelian'>Pembelian</NavLink> </li>
                <li> <NavLink to='/laporan'>Laporan</NavLink> </li>
                <li> <NavLink to='#!'className="dropdown-trigger" data-target="dropdown-barang">  Data  <i className="material-icons right">arrow_drop_down</i> </NavLink></li>
                <li> <NavLink to='/info' >Info</NavLink> </li>
              </ul>
            </div>
          </nav>
        </header>
    )
  }
}
