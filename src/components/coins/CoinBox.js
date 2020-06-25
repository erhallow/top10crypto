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
  rank,
}) => {
  //Conditional Styling Dollar Change
  let dollarChangeStyle = { backgroundColor: '#BCF5C2', fontWeight: 'bold' };

  if (parseFloat(dollarChange.replace(/\$/g, '')) < 0) {
    dollarChangeStyle.backgroundColor = '#F5CDBC';
  }

  //Conditional Styling Percent Change
  let percentChangeStyle = {
    color: '#127900',
    fontWeight: 'bold',
  };

  if (parseFloat(percentChange.replace(/\$/g, '')) < 0) {
    percentChangeStyle.color = '#FE0000';
  }

  // Format Dollar Volume from String to Millions or Thousands

  // 1. Format string to number using regex
  let newDollarVolumeNum = Math.round(
    parseFloat(dollarVolume.replace(/\$|,/g, ''))
  );

  // 2. Add M for millions or K for thousands to number
  function formatVolume(labelValue) {
    if (Math.abs(Number(labelValue)) >= 1.0e6) {
      return Math.round(Math.abs(Number(labelValue)) / 1.0e6) + 'M';
    } else if (Math.abs(Number(labelValue)) >= 1.0e3) {
    }
    return Math.round(Math.abs(Number(labelValue)) / 1.0e3) + 'K';
  }

  let newVolumeFormat = formatVolume(newDollarVolumeNum);

  return (
    <div className='container-fluid mb-2 mt-2 coinbg'>
      {/* Desktop View */}
      <div className='row desktopview'>
        <div className='col text-white text-center border border-dark background pt-3 rounded-right rounded-left mr-1 ml-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <h4>{name}</h4>
              </div>

              <div className='col-sm'>
                <img
                  src={image}
                  alt={name}
                  className='w-50 mb-3 bg-white removeimage'
                />
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
          <p>${newVolumeFormat}</p>
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

      {/* Card View */}

      <div className='row d-flex justify-content-center'>
        <div className='card w-75 justify-content-center rounded cardview'>
          <div className='text-center pt-1 pb-0'>
            <img className='card-img-top resizeimg' src={image} alt={name} />
          </div>

          <div className='card-body pt-1'>
            <div className='card-title text-center text-white background'>
              <h5>
                #{rank}&nbsp;&nbsp;&nbsp;{name}
              </h5>
            </div>
            <ul className='list-group list-group-flush text-center'>
              <li className='list-group-item'>{price}</li>
              <li className='list-group-item' style={dollarChangeStyle}>
                {dollarChange}
              </li>
              <li className='list-group-item' style={percentChangeStyle}>
                %{percentChange}
              </li>
              <li className='list-group-item'>
                V<span className='volformat'>OL</span>: ${newVolumeFormat}
              </li>
              <li className='list-group-item'>
                <a href={reviewURL} target='_blank' rel='noopener noreferrer'>
                  {lastUpdate}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinBox;
