import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Top 10 Cryptocurrencies by 24h Volume',
    icon: 'fas fa-coins',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar navbarStyle text-white'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
          <i className={this.props.icon}></i>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
