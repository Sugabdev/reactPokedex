import { useEffect, useState, createContext } from 'react'

export const pokemonEndpoint = createContext()

const POKEMON_ENDPOINT_JSON = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12'

export function EndpointProvider ({ children }) {
  const [endpoint, setEndpoint] = useState(POKEMON_ENDPOINT_JSON)
  const [pokemonJson, setPokemonJson] = useState()

  const updateEndpoint = (newEndpoint) => {
    setEndpoint(newEndpoint)
  }

  useEffect(() => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setPokemonJson(data))
  }, [endpoint])

  return (
    <pokemonEndpoint.Provider value={{ pokemonJson, updateEndpoint }}>
      {children}
    </pokemonEndpoint.Provider>
  )
}
