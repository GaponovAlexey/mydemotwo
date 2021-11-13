import React from 'react'
import { BasketItem } from './BasketItem'

export const BasketList = ({stateBasket, changeBasket }) => {
  return (
    <div className='collection basket-list' >
      <div className='collection-item active'>Корзина</div>
      {stateBasket.length ? <BasketItem changeBasket={changeBasket} /> : ''}
    </div>
  )
}
