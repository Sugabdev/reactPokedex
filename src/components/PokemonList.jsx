import pokemonData from '../../mocks/pokemonData01.json'

export function PokemonList () {
  return (
    // 1. Mostrar una lista con los nombres de los Pokémon. Cada Pokémon debe ser seleccionable.
    // 2. Mostrar una sección con los datos del Pokémon seleccionado.
    // 3. Datos a mostrar: Imagen, Nombre, Tipo(s), Generación, Región, Línea evolutiva.
    // 4. Descripción del Pokémon (opcional).
    // 5. Cuando se seleccione un nuevo Pokémon, actualizar la sección de detalles.
    <section className='bg-gray-400 text-white flex gap-4 p-4'>
      <aside>
        <h1>datos del pokemon seleccionado</h1>
      </aside>
      <ul>
        {pokemonData.results.map(pokemon => {
          return (
            <li key={pokemon.id}>
              <button onClick={() => console.log('click')}>{pokemon.name}</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
