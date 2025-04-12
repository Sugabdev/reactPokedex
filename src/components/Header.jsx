export function Header () {
  return (
    <header className='min-h-[10vh] bg-amber-400 flex gap-8 justify-center items-center text-6xl p-4'>
      <img
        src='src/assets/pokeball.svg'
        alt='pokeball icon for the pokedex'
        className='max-w-12'
      />
      <img
        src='src/assets/pokedex-title.png'
        alt='classic pokedex title with pokemon font'
        className='max-w-36 2xl:max-w-48'
      />
      <img
        src='src/assets/pokemon-title.svg'
        alt='pokemon main title design'
        className='max-w-36 2xl:max-w-48'
      />
    </header>
  )
}
