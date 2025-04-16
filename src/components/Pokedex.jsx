import { PokemonInfo } from './PokemonInfo.jsx'
import { PokemonList } from './PokemeonList.jsx'
import { PageButtons } from './Pagination.jsx'
import { EndpointProvider } from '../context/Endpoint.jsx'

export function Pokedex () {
  return (
    <EndpointProvider>
      <main className='min-h-[90vh] bg-[url("./assets/pokedex.png")] bg-no-repeat bg-cover flex justify-center items-center'>
        <section className='backdrop-brightness-40 text-white grid grid-cols-2 rounded-lg p-8 gap-8'>
          <section className='w-full'>
            <img src='src/assets/pokedex-title.png' alt='pokemon title for the pokedex header' className='max-w-40 m-auto' />
          </section>
          <PageButtons />
          <PokemonInfo />
          <PokemonList />
        </section>
      </main>
    </EndpointProvider>
  )
}
