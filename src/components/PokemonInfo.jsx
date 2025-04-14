import { useContext } from 'react'
import { pokemonData } from '../context/Data.jsx'

export function PokemonInfo () {
  const { data } = useContext(pokemonData)

  const checkTypeColor = (type) => {
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

    for (const property in typeColors) {
      if (property === type.name) {
        const color = typeColors[property]
        return color
      }
    }
  }
  return (
    <aside className='min-w-sm flex flex-col items-center gap-6'>
      {data &&
        <>
          <div className='w-full'>
            <p className='text-center bg-gradient-to-t from-indigo-500 to-fuchsia-600 rounded-lg px-2 py-1 mb-2 font-semibold'>{data.name}</p>
            <figure className='bg-white rounded-lg flex justify-center'>
              <img
                src={data.image}
                alt='pokemon image from pokeapi db'
                className='min-w-3xs'
              />
            </figure>
          </div>
          <article className='w-full flex flex-col justify-start items-start gap-4 font-semibold'>
            <p className='bg-gray-600 rounded-lg px-2 py-1'>ID: {data.id}</p>
            <span className='flex gap-4 items-center'>
              Types:
              {
              data.types.map(type => {
                return <p key={type.url} style={{ backgroundColor: checkTypeColor(type) }} className='rounded-lg px-2 py-1'>{type.name}</p>
              })
            }
            </span>
            <span className='flex gap-4 items-center'>
              Abilities:
              {
              data.abilities.map(ability => {
                return <p key={ability.url} className='text-center bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg px-2 py-1'>{ability.name}</p>
              })
            }
            </span>
          </article>
        </>}
    </aside>
  )
}
