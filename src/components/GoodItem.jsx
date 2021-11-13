import React from 'react'

export const GoodItem = ({
  displayName,
  offerId,
  displayAssets,
  price,
  displayType,
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
          <button className='btn' >купить</button>
        </div>
      </div>
    </div>
  )
}
