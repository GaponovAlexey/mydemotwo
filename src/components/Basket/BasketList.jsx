import React from 'react'
import { BasketItem } from './BasketItem'

export const BasketList = ({remove, decrement, stateBasket,increment, changeBasket }) => {
const totalPrice = stateBasket.reduce((prev, el) => {
  return prev + el.price * el.quntity
}, 0)

  return (
    <div className='collection basket-list'>
      <div className='collection-item active'>
        Корзина
        <span
        onClick={() => changeBasket()}
        className='right' style={{ cursor: 'pointer' }}>
          close
        </span>
      </div>
      {stateBasket.map((data) => (
        <BasketItem key={data.offerId} {...data} remove={remove} decrement={decrement} increment={increment} />
      ))}
      <div className='collection-item active'>всего{totalPrice}</div>
    </div>
  )
}
