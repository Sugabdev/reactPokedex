import { usePokemon } from '../hooks/usePokemon.js'
import { useState } from 'react'

export function PokemonList () {
  const { pokemons } = usePokemon()
  const [pokemonData, setPokemonData] = useState()

  const handleClick = (event) => {
    for (const pokemon of pokemons) {
      if (pokemon.name === event.target.innerText) {
        setPokemonData(pokemon)
      }
    }
  }

  return (
  // 1. Mostrar una lista con los nombres de los Pokémon. Cada Pokémon debe ser seleccionable.
  // 2. Mostrar una sección con los datos del Pokémon seleccionado.
  // 3. Datos a mostrar: Imagen, Nombre, Tipo(s), Generación, Región, Línea evolutiva.
  // 4. Descripción del Pokémon (opcional).
  // 5. Cuando se seleccione un nuevo Pokémon, actualizar la sección de detalles.

    <section className='bg-gray-500 text-white flex gap-12 p-4 rounded-lg'>
      <aside className='min-w-sm flex flex-col items-center gap-2'>
        {pokemonData &&
          <>
            <img
              src={pokemonData.image}
              alt='pokemon image from pokeapi db'
              className='min-w-3xs'
            />
            <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>{pokemonData.name}</p>
            <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>{pokemonData.id}</p>
            <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>{pokemonData.types}</p>
          </>}
      </aside>
      <ul className='flex flex-col items-center justify-center gap-1 py-4'>
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
    </section>
  )
}
