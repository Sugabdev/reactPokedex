import { usePokemon } from '../hooks/usePokemon'
import { useContext } from 'react'
import { pokemonData } from '../context/Data.jsx'

export function PokemonList () {
  const { pokemons } = usePokemon()
  const { setData } = useContext(pokemonData)

  const handleClick = (event) => {
    for (const pokemon of pokemons) {
      if (pokemon.name === event.target.innerText) {
        setData(pokemon)
      }
    }
  }

  return (
    <ul className='flex flex-col items-center justify-center gap-1'>
      {pokemons && pokemons.map(pokemon => {
        return (
          <li key={pokemon.id}>
            <button
              className='min-w-sm border-1 border-gray-300 rounded-sm px-1 py-1 hover:bg-gray-400 hover:scale-110 transition'
              onClick={handleClick}
            >
              {pokemon.name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
