import React from 'react'

export const Cart = ({stateBasket}) => {
  return (
    <div className='collection cart' >
      <i class='material-icons'>shopping_cart</i>
      {stateBasket}
    </div>
  )
}
