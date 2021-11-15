import React from 'react'

export const BasketItem = ({decrement, remove, name, increment, id, price, quntity }) => {
  return (
    <div>
      <div className='collection-item '>
        {name}<span style={{color: 'red'}}  onClick={() => decrement(id)}>-</span>*
        <span onClick={() => increment(id)}>+</span> {quntity}шт
        <span className='right'>
          <span className='right'
          style={{color: 'red'}}
          onClick={() => remove(id)} >&times;</span>
          {price * quntity}</span>
      </div>
    </div>
  )
}
