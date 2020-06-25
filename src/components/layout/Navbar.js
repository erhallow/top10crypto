import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Top 10 Cryptocurrencies by 24h Volume',
    mobiletitle: 'Top 10 Crypto by Volume',
    icon: 'fas fa-coins',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar navbarStyle text-white'>
        <h5 className='browsertitle'>
          <i className={this.props.icon}></i>
          {this.props.title}
          <i className={this.props.icon}></i>
        </h5>
        <h5 className='mobiletitle'>
        <i className={this.props.icon}></i>
          {this.props.mobiletitle}
          <i className={this.props.icon}></i>
        </h5>
      </nav>
    );
  }
}

export default Navbar;
