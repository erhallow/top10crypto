import React from 'react';

const CoinBox = ({
  coin: {
    name,
    image,
    price,
    dollarChange,
    percentChange,
    dollarVolume,
    lastUpdate,
    reviewURL,
  },
}) => {
  //Conditional Styling Dollar Change
  let dollarChangeStyle = { backgroundColor: '#BCF5C2', fontWeight: 'bold' };

  if (parseFloat(dollarChange.replace(/[\$]/g, '')) < 0) {
    dollarChangeStyle.backgroundColor = '#F5CDBC';
  }

  //Conditional Styling Percent Change
  let percentChangeStyle = {
    color: '#127900',
    fontWeight: 'bold',
  };

  if (parseFloat(percentChange.replace(/[\%]/g, '')) < 0) {
    percentChangeStyle.color = '#FE0000';
  }

  return (
    <div className='container-fluid mb-2 mt-2 coinbg'>
      <div className='row'>
        <div className='col text-white text-center border border-dark background pt-3 rounded-right rounded-left mr-1 ml-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <h3>{name}</h3>
              </div>

              <div className='col-sm'>
                <img src={image} alt={name} className='w-50 mb-3 bg-white' />
              </div>
            </div>
          </div>
        </div>

        <div className='col border border-dark rounded-left rounded-right text-center mr-1 ml-1'>
          <br></br>
          <p>{price}</p>
        </div>
        <div
          className='col border border-dark text-center rounded-left rounded-right mr-1 ml-1'
          style={dollarChangeStyle}
        >
          <br></br>
          <p>{dollarChange}</p>
        </div>
        <div
          className='col border border-dark text-center rounded-left rounded-right mr-1 ml-1'
          style={percentChangeStyle}
        >
          <br></br>
          <p> %{percentChange} </p>
        </div>
        <div className='col border border-dark text-center rounded-left rounded-right mr-1 ml-1'>
          <br></br>
          <p>{dollarVolume}</p>
        </div>
        <div className='col border border-dark text-center rounded-left rounded-right mr-1 ml-1'>
          <br></br>
          <p>
            <a href={reviewURL} target='_blank' rel='noopener noreferrer'>
              {lastUpdate}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CoinBox;
