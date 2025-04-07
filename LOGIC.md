# POKEDÉX CON POKEAPI

## Mostrar un listado con todos los pokemon.

1. Mostrar una lista con los nombres de los Pokémon. Cada Pokémon debe ser seleccionable.
2. Mostrar una sección con los datos del Pokémon seleccionado.
3. Datos a mostrar: Imagen, Nombre, Tipo(s), Generación, Región, Línea evolutiva.
4. Descripción del Pokémon (opcional).
5. Cuando se seleccione un nuevo Pokémon, actualizar la sección de detalles.

## Separar el listado por páginas.

1. Agregar botones para navegar entre páginas del listado.
2. Mantener los detalles del Pokémon seleccionado aunque se cambie de página.
3. Mostrar el número de página actual y cuántas hay en total.
4. Desactivar los botones "Anterior" o "Siguiente" si no hay más páginas.

## Agregar filtros.

1. Agregar una barra para filtrar por nombre (no sensible a mayúsculas/minúsculas).
2. El filtrado debe funcionar en tiempo real (al escribir).
3. Agregar botones o un menú para filtrar por tipo de Pokémon.
4. Agregar botones o un menú para filtrar por generación.
5. Los filtros deben actualizar solo el listado, no los detalles si ya hay un Pokémon seleccionado.
6. Combinar filtros (por ejemplo: nombre + tipo + generación al mismo tiempo).

## Nivel intermedio

1. Agregar una funcionalidad para marcar Pokémon como "favoritos".
2. Mostrar una lista de favoritos en un panel lateral o sección separada.
3. Guardar los favoritos en localStorage para que persistan entre recargas.
4. Agregar un botón para mostrar solo los Pokémon marcados como favoritos.

    Api: https://pokeapi.co/api/v2/pokemon/