import React, { useEffect } from 'react'

export const Alert = ({ name, closeAlert }) => {


  useEffect(() => {
    const timerId = setTimeout(closeAlert, 500)
    return () => {
      clearInterval(timerId)
    }
    //eslint-disable-next-line
  }, [name])

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  )
}
