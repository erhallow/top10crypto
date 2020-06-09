import React from 'react';
import CoinBox from './CoinBox';
import PropTypes from 'prop-types';

const Coin = ({ coins, isLoaded }) => {
  if (isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <div className='titlebar container-fluid mb-2 mt-2'>
          <div className='row'>
            <div className='col mr-1 ml-1'> </div>
            <div className='col text-center border border-dark rounded-left rounded-right buttonbg text-white mr-1 ml-1'>
              <span>Price ($)</span>
            </div>
            <div className='col text-center border border-dark rounded-left rounded-right buttonbg text-white mr-1 ml-1'>
              Dollar Change ($)
            </div>
            <div className='col text-center border border-dark rounded-left rounded-right buttonbg text-white mr-1 ml-1'>
              Percent Change (%)
            </div>
            <div className='col text-center border border-dark rounded-left rounded-right buttonbg text-white mr-1 ml-1'>
              Dollar Volume ($)
            </div>
            <div className='col text-center border border-dark rounded-left rounded-right buttonbg text-white mr-1 ml-1'>
              Last Updated (min)
            </div>
          </div>
        </div>
        {coins.map((coin) => (
          <CoinBox key={coin.name} coin={coin} />
        ))}
      </div>
    );
  }
};

Coin.propTypes = {
  coins: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default Coin;
