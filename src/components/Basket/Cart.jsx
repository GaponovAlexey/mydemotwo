import React from 'react'

export const Cart = ({ changeBasket, quntity }) => {
  return (
    <div onClick={() => changeBasket()} className='collection cart'>
      <i onClick={changeBasket} className='material-icons'>
        shopping_cart
      </i>
      <div>{quntity}</div>
    </div>
  )
}
