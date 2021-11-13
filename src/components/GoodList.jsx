import React from 'react'
import { GoodItem } from './GoodItem'

export const GoodList = ({ state }) => {
  return (
    <div className='goods'>
      {state.map((data) => {
        return <GoodItem key={data.offerId} {...data} />
      })}
    </div>
  )
}
