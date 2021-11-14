import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { BasketList } from './Basket/BasketList'
import { Cart } from './Basket/Cart'
import { GoodList } from './MainCard/GoodList'

export const Main = () => {
  const [state, setState] = useState([])
  const [isBasket, setIsBasket] = useState(false)
  const [stateBasket, setStateBasket] = useState([])


  const addBasket = (item) => {
    const findIndex = stateBasket.findIndex(ind => ind.id === item.id)
    if(findIndex < 0 ){
      const newOrder = {
        ...item,
        quntity: 1
      }
      setStateBasket([...stateBasket, newOrder])
    } else {
      const newStateBasket = stateBasket.map((order , index) => {
        if(index === findIndex) {
          return {
            ...order,
            quntity: order.quntity + 1
          }
        } else {
          return order
        }
      })
      setStateBasket(newStateBasket)
    }
  }

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
        <GoodList state={state} addBasket={addBasket} />
      </div>
      {!isBasket ? (
        <Cart stateBasket={stateBasket.length} changeBasket={changeBasket} />
      ) : (
        ''
      )}
    </div>
  )
}
