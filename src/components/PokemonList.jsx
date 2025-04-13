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

  const typeColors = {
    fire: '#e7000b',
    water: '#2b7fff',
    grass: '#00a63e',
    flying: '#51a2ff',
    ghost: '#1e1a4d',
    poison: '#59168b',
    dragon: '#1c398e',
    steel: '#8ec5ff',
    rock: '#57534d',
    ground: '#461901',
    dark: '#1c1917',
    psychic: '#c6005c',
    normal: '#d4d4d4',
    fighting: '#ca3500',
    ice: '#53eafd',
    fairy: '#ed6aff',
    electric: '#ffb900',
    bug: '#7ccf00'
  }

  return (
  // 1. Mostrar una lista con los nombres de los Pokémon. Cada Pokémon debe ser seleccionable.
  // 2. Mostrar una sección con los datos del Pokémon seleccionado.
  // 3. Datos a mostrar: Imagen, Nombre, Tipo(s), Generación, Región, Línea evolutiva.
  // 4. Descripción del Pokémon (opcional).
  // 5. Cuando se seleccione un nuevo Pokémon, actualizar la sección de detalles.
    <main className='min-h-[90vh] bg-[url("./assets/pokedex.png")] bg-no-repeat bg-cover flex justify-center items-center'>
      <section className='backdrop-brightness-50 text-white grid grid-cols-2 rounded-lg p-8 gap-8'>
        <section className='w-full col-span-2'>
          <img
            src='src/assets/pokedex-title.png'
            alt='pokemon title for the pokedex header'
            className='max-w-40 m-auto'
          />
        </section>
        <aside className='min-w-sm flex flex-col items-center gap-6'>
          {pokemonData &&
            <>
              <div className='w-full'>
                <p className='text-center bg-fuchsia-900 rounded-lg px-2 py-1 mb-2'>{pokemonData.name}</p>
                <figure className='bg-white rounded-lg flex justify-center'>
                  <img
                    src={pokemonData.image}
                    alt='pokemon image from pokeapi db'
                    className='min-w-3xs'
                  />
                </figure>
              </div>
              <article className='w-full flex flex-wrap justify-start gap-4'>
                <p className='bg-fuchsia-900 rounded-lg px-2 py-1'>ID: {pokemonData.id}</p>
                {
                  pokemonData.types.map(type => {
                    return <p key={type.url} className='bg-fuchsia-900 rounded-lg px-2 py-1'>{type.name}</p>
                  })
                }
              </article>
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
