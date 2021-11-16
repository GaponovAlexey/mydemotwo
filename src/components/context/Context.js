import { createContext } from 'react'

export const shopContext = createContext()

const store = {id: 1, name: 'alexey'}


export const Context = ({children}) => {
  return <shopContext.Provider store={store}>{children}</shopContext.Provider>
}
