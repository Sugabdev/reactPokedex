import { useRef, useContext } from 'react'
import { pokemonEndpoint } from '../context/Endpoint.jsx'

// 1. Agregar botones para navegar entre páginas del listado.
// 2. Mantener los detalles del Pokémon seleccionado aunque se cambie de página.

export function PageButtons () {
  const { pokemonJson, updateEndpoint } = useContext(pokemonEndpoint)
  const pageRef = useRef(1)

  const prevPage = () => {
    if (pokemonJson.previous) {
      updateEndpoint(pokemonJson.previous)
      return pageRef.current--
    }
  }

  const nextPage = () => {
    if (pokemonJson.next) {
      updateEndpoint(pokemonJson.next)
      return pageRef.current++
    }
  }

  return (
    <section className='w-full flex gap-4 items-center justify-center font-semibold'>
      <button
        onClick={prevPage}
        className='min-w-15 border-2 border-indigo-600 rounded-lg px-4 py-2 hover:bg-indigo-600 hover:border-gray-300'
      >
        prev
      </button>
      <span className='border-2 border-gray-300 rounded-lg px-4 py-2 text-center hover:bg-gray-300 hover:text-gray-700'>{pageRef.current}</span>
      <button
        onClick={nextPage}
        className='min-w-15 border-2 border-indigo-600 rounded-lg px-4 py-2 hover:bg-indigo-600 hover:border-gray-300'
      >
        next
      </button>
    </section>
  )
}
