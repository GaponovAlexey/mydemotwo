import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { Alert } from './Basket/Alert'
import { BasketList } from './Basket/BasketList'
import { Cart } from './Basket/Cart'
import { GoodList } from './MainCard/GoodList'

export const Main = () => {
  const [state, setState] = useState([])
  const [stateBasket, setStateBasket] = useState([])
  const [isBaslet, setIsBaslet] = useState(false)

  const [alertname, setAlertname] = useState('')

  const addBasket = (item) => {
    const findIndex = stateBasket.findIndex((ind) => ind.id === item.id)
    if (findIndex < 0) {
      const newOrder = {
        ...item,
        quntity: 1,
      }
      setStateBasket([...stateBasket, newOrder])
    } else {
      const newBasketState = stateBasket.map((order, index) => {
        if (index === findIndex) {
          return {
            ...order,
            quntity: order.quntity + 1,
          }
        } else {
          return order
        }
      })
      setStateBasket(newBasketState)
    }
    setAlertname(item.name)
  }

  const remove = (id) => {
    setStateBasket((prev) => prev.filter((el) => el.id !== id))
  }

  const increment = (item) => {
    const newOrder = stateBasket.map((el) => {
      if (el.id === item) {
        const newQuntity = el.quntity + 1
        return {
          ...el,
          quntity: newQuntity >= 0 ? newQuntity : 0,
        }
      } else {
        return el
      }
    })
    setStateBasket(newOrder)
  }

  const decrement = (item) => {
    const newOrederdec = stateBasket.map((el) => {
      if (el.id === item) {
        const newItem = el.quntity - 1
        return {
          ...el,
          quntity: newItem >= 0 ? newItem : 0,
        }
      } else {
        return el
      }
    })
    setStateBasket(newOrederdec)
  }

  const changeBasket = () => {
    setIsBaslet(!isBaslet)
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

  const closeAlert = () => {
    setAlertname('')
  }

  return (
    <div>
      <div className='main'>
        <Cart
          quntity={stateBasket.length}
          changeBasket={changeBasket}
          BasketList={BasketList}
          stateBasket={stateBasket.length}
        />
        <GoodList state={state} addBasket={addBasket} />
      </div>
      {isBaslet ? (
        <BasketList
          decrement={decrement}
          increment={increment}
          remove={remove}
          changeBasket={changeBasket}
          stateBasket={stateBasket}
        />
      ) : (
        ''
      )}
      {alertname && <Alert name={alertname} closeAlert={closeAlert} />}
    </div>
  )
}
