import React , {createContext,useContext, useState} from 'react';




const Context = createContext()


export const StateContext = ({children}) => {
  const [dark, setDark] = useState(true)
  const [amILoggedIn, setAmILoggedIn] = useState(false)
  const [selected, setSelected] = useState('male')
  const [search, setSearch] = useState('')

  
  
  const changeMode = () => {
    setDark(prev => !prev)
  }

  return(
    <Context.Provider
        value={{
            dark,
            changeMode,
            amILoggedIn,
            setAmILoggedIn,
            selected,
            setSelected,
            search,
            setSearch
        }}
    >
        {children}
    </Context.Provider>
  )
}


export const useStateContext = () => useContext(Context)