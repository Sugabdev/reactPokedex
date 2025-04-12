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
    <main className='min-h-[90vh] bg-[url("./assets/pokedex.png")] bg-no-repeat bg-cover flex justify-center items-center'>
      {/* <section className='bg-linear-to-r from-indigo-200 to-indigo-400 text-white flex rounded-lg p-8 gap-8'> */}
      <section className='backdrop-brightness-50 text-white flex rounded-lg p-8 gap-8'>
        <aside className='min-w-sm flex flex-col items-center gap-6'>
          {pokemonData &&
            <>
              <div className='bg-white rounded-lg w-full flex justify-center'>
                <img
                  src={pokemonData.image}
                  alt='pokemon image from pokeapi db'
                  className='min-w-3xs'
                />
              </div>
              <div className='w-full flex flex-wrap justify-start gap-4'>
                <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>Name: {pokemonData.name}</p>
                <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>Id: {pokemonData.id}</p>
                <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>Types: {pokemonData.types}</p>
              </div>
            </>}
        </aside>
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
      </section>
    </main>
  )
}
