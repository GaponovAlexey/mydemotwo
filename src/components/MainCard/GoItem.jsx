import React from 'react'

export const GoItem = ({
  displayName,
  offerId,
  displayAssets,
  price,
  displayType,
  addBasket,
}) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={displayAssets.map((e) => e.background)} alt={displayName} />
        <span className='card-title'>{displayName}</span>
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {displayType}
        </span>
        <div>
          <span className='right' >{price.regularPrice}</span>
          <button className='btn' onClick={() => addBasket({ 
            id: offerId,
            name: displayName,
            price:price.regularPrice,
            })}>
            купить
          </button>
        </div>
      </div>
    </div>
  )
}
