import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { GoodList } from './GoodList'

export const Main = () => {
  const [state, setState] = useState([])


  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    }).then((r) => r.json())
    .then(data => {
      data.shop && setState(data.shop)
    })
  },[])



  // console.log(state);
  return (
    <div className='main'>
      <GoodList state={state} />
    </div>
  )
}
