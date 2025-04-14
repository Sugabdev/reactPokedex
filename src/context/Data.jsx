import { createContext, useState } from 'react'

export const pokemonData = createContext()

export function DataProvider ({ children }) {
  const [data, setData] = useState()

  return (
    <pokemonData.Provider value={{
      data,
      setData
    }}
    >
      {children}
    </pokemonData.Provider>
  )
}
