import React from 'react'
import { GoItem } from './GoItem'


export const GoodList = ({ state, addBasket }) => {
  return (
    <div className='goods'>
      {state.map((data) => {
        return <GoItem addBasket={addBasket} key={data.offerId} {...data} />
      })}
    </div>
  )
}
