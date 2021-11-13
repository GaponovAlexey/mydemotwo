import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { BasketList } from './Basket/BasketList'
import { Cart } from './Basket/Cart'
import { GoodList } from './MainCard/GoodList'

export const Main = () => {
  const [state, setState] = useState([])
  const [isBasket, setIsBasket] = useState(false)
  const [stateBasket, setStateBasket] = useState([{id:1, name:'yes'}])

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        data.shop && setState(data.shop)
      })
  }, [])

  const changeBasket = () => {
    setIsBasket(!isBasket)
  }

  return (
    <div>
      <div className='main'>
        <GoodList state={state} />
      </div>
      {!isBasket ? <Cart stateBasket={stateBasket.length} changeBasket={changeBasket} /> : ''}
    </div>
  )
}
