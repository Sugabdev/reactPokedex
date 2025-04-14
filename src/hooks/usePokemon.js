import { useEffect, useState } from 'react'

export function usePokemon () {
  const POKEMON_JSON = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12'

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const buildingData = async () => {
      const res = await fetch(POKEMON_JSON)
      const data = await res.json()
      const pokemonArrData = data.results

      const pokemonDetailedData = pokemonArrData.map(async (pokemon) => {
        const id = parseInt(pokemon.url.slice(33).split('/').join(''))

        const res = await fetch(pokemon.url)
        const data = await res.json()

        const image = data.sprites.front_default
        const types = data.types.map(obj => { return obj.type })
        const abilities = data.abilities.map(obj => { return obj.ability })

        return { ...pokemon, id, image, types, abilities }
      })

      const result = await Promise.all(pokemonDetailedData)
      setPokemons(result)
    }
    buildingData()
  }, [])
  return { pokemons }
}
