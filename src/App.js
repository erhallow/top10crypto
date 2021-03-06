import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Coin from './components/coins/Coin';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    coins: [],
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    axios
      .get(
        'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD'
      )
      .then((response) =>
        response.data.Data.map((coin) => ({
          name: `${coin.CoinInfo.Name}`,
          image: `http://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
          price: `${coin.DISPLAY.USD.PRICE}`,
          dollarChange: `${coin.DISPLAY.USD.CHANGE24HOUR}`,
          percentChange: `${coin.DISPLAY.USD.CHANGEPCTDAY}`,
          dollarVolume: `${coin.DISPLAY.USD.VOLUMEDAYTO}`,
          lastUpdate: `${coin.DISPLAY.USD.LASTUPDATE}`,
          reviewURL: `http://www.cryptocompare.com${coin.CoinInfo.Url}`,
        }))
      )

      .then((coins) => {
        this.setState({
          coins,
          isLoaded: false,
        });
        console.log(coins);
      })
      .catch((error) => this.setState({ error, isLoaded: false }));
  }

  // Sort Percentage Change Descending - Largest Gain at Top
  sortPercentChangeDesc() {
    const sortPercentDesc = [...this.state.coins].sort((a, b) => {
      return (
        parseFloat(b.percentChange.replace(/\$/g, '')) -
        parseFloat(a.percentChange.replace(/\$/g, ''))
      );
    });
    this.setState({ coins: sortPercentDesc });
  }

  // Sort Percentage Change Ascending - Largest Loss at Top
  sortPercentChangeAsc() {
    const sortPercentAsc = [...this.state.coins].sort((a, b) => {
      return (
        parseFloat(a.percentChange.replace(/\$/g, '')) -
        parseFloat(b.percentChange.replace(/\$/g, ''))
      );
    });
    this.setState({ coins: sortPercentAsc });
  }

  // Sort Dollar Change Descending - Largest Gain at Top
  sortDollarDesc() {
    const sortedDesc = [...this.state.coins].sort((a, b) => {
      return (
        parseFloat(b.dollarChange.replace(/\$/g, '')) -
        parseFloat(a.dollarChange.replace(/\$/g, ''))
      );
    });
    this.setState({ coins: sortedDesc });
  }

  // Sort Dollar Change Ascending - Largest Loss at Top
  sortDollarAsc() {
    const sortedAsc = [...this.state.coins].sort((a, b) => {
      return (
        parseFloat(a.dollarChange.replace(/\$/g, '')) -
        parseFloat(b.dollarChange.replace(/\$/g, ''))
      );
    });
    this.setState({ coins: sortedAsc });
  }

  getRank(arr, item) {
    const rank = arr.indexOf(item) + 1;
    return rank;
  }

  render() {
    const { isLoaded, coins } = this.state;

    return (
      <Fragment>
        <Navbar />
        {/* Small Mobile View Buttons */}
        <div className='text-center smallmobileview'>
          <div className='btn-group btn-group-toggle ml-2 mt-2'>
            <button
              className='btn btn-outline-dark btn-rounded'
              onClick={() => this.sortDollarAsc()}
            >
              $∆<i className='fas fa-arrow-up'></i>
            </button>
            <button
              className='btn btn-outline-dark'
              onClick={() => this.sortDollarDesc()}
            >
              $∆<i className='fas fa-arrow-down'></i>
            </button>
            <button
              className='btn btn-outline-dark'
              onClick={() => this.sortPercentChangeAsc()}
            >
              %∆<i className='fas fa-arrow-up'></i>
            </button>
            <button
              className='btn btn-outline-dark'
              onClick={() => this.sortPercentChangeDesc()}
            >
              %∆<i className='fas fa-arrow-down'></i>
            </button>
          </div>
        </div>

        {/*Mobile View Buttons*/}

        <div className='text-center cardview end'>
          <div className='btn-group btn-group-toggle ml-2 mt-2'>
            <button
              className='btn btn-outline-dark btn-rounded'
              onClick={() => this.sortDollarAsc()}
            >
              $CHG<i className='fas fa-arrow-up'></i>
            </button>
            <button
              className='btn btn-outline-dark'
              onClick={() => this.sortDollarDesc()}
            >
              $CHG<i className='fas fa-arrow-down'></i>
            </button>
            <button
              className='btn btn-outline-dark'
              onClick={() => this.sortPercentChangeAsc()}
            >
              %CHG<i className='fas fa-arrow-up'></i>
            </button>
            <button
              className='btn btn-outline-dark'
              onClick={() => this.sortPercentChangeDesc()}
            >
              %CHG<i className='fas fa-arrow-down'></i>
            </button>
          </div>
        </div>

        {/* Desktop View Buttons*/}

        <div className='btn-group btn-group-toggle ml-2 mt-2 desktopview'>
          <button
            className='btn btn-outline-dark btn-rounded'
            onClick={() => this.sortDollarAsc()}
          >
            $CHG
            <i className='fas fa-arrow-up'></i>
          </button>
          <button
            className='btn btn-outline-dark'
            onClick={() => this.sortDollarDesc()}
          >
            $CHG
            <i className='fas fa-arrow-down'></i>
          </button>
          <button
            className='btn btn-outline-dark'
            onClick={() => this.sortPercentChangeAsc()}
          >
            %CHG
            <i className='fas fa-arrow-up'></i>
          </button>
          <button
            className='btn btn-outline-dark'
            onClick={() => this.sortPercentChangeDesc()}
          >
            %CHG
            <i className='fas fa-arrow-down'></i>
          </button>
        </div>

        {/* Coinbox Cards Desktop + Mobile */}

        <div className='container-fluid'>
          <Coin isLoaded={isLoaded} coins={coins} />
        </div>
      </Fragment>
    );
  }
}
export default App;
