import { PokemonInfo } from './PokemonInfo.jsx'
import { PokemonList } from './PokemeonList.jsx'

export function Pokedex () {
  return (
  // 1. Mostrar una lista con los nombres de los Pokémon. Cada Pokémon debe ser seleccionable.
  // 2. Mostrar una sección con los datos del Pokémon seleccionado.
  // 3. Datos a mostrar: Imagen, Nombre, Tipo(s), Generación, Región, Línea evolutiva.
  // 4. Descripción del Pokémon (opcional).
  // 5. Cuando se seleccione un nuevo Pokémon, actualizar la sección de detalles.
    <main className='min-h-[90vh] bg-[url("./assets/pokedex.png")] bg-no-repeat bg-cover flex justify-center items-center'>
      <section className='backdrop-brightness-50 text-white grid grid-cols-2 rounded-lg p-8 gap-8'>
        <section className='w-full col-span-2'>
          <img src='src/assets/pokedex-title.png' alt='pokemon title for the pokedex header' className='max-w-40 m-auto' />
        </section>
        <PokemonInfo />
        <PokemonList />
      </section>
    </main>
  )
}
