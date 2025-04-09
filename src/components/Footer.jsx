export function Footer () {
  return (
    <footer className='bg-red-700 min-h-[20vh] text-center text-white p-8 flex flex-col gap-4'>
      <section className='flex justify-center items-start gap-32 bg-red-800 rounded-sm py-8 px-4'>
        <div className='min-w-48 self-center'>
          <img src='src/assets/pikachu-gorra.svg' alt='imagen svg de pikachu con una gorra pokemon' />
        </div>
        <article className='flex flex-col text-lg gap-2'>
          <h2 className='mb-4 font-semibold text-3xl'>Social media</h2>
          <a href='#' className='text-left flex gap-1 hover:scale-110 transition'><img src='src/assets/footer/facebook.svg' alt='facebook icon' className='max-w-6' />facebook</a>
          <a href='#' className='text-left flex gap-1 hover:scale-110 transition'><img src='src/assets/footer/twitter.svg' alt='twitter icon' className='max-w-6' />Twitter</a>
          <a href='#' className='text-left flex gap-1 hover:scale-110 transition'><img src='src/assets/footer/instagram.svg' alt='instagram icon' className='max-w-6' />Instagram</a>
          <a href='#' className='text-left flex gap-1 hover:scale-110 transition'><img src='src/assets/footer/discord.svg' alt='discord icon' className='max-w-6' />Discord</a>
          <a href='#' className='text-left flex gap-1 hover:scale-110 transition'><img src='src/assets/footer/reddit.svg' alt='reddit icon' className='max-w-6' />Reddit</a>
          <a href='#' className='text-left flex gap-1 hover:scale-110 transition'><img src='src/assets/footer/whatsapp.svg' alt='whats app icon' className='max-w-6' />WhatsApp</a>
        </article>
        <article className='flex flex-col text-lg gap-2'>
          <h2 className='mb-4 font-semibold text-3xl'>Contact info</h2>
          <span className='text-left'>Contact Us</span>
          <span className='text-left'>About Us</span>
          <span className='text-left'>Support</span>
          <span className='text-left'>Legal</span>
        </article>
        <article className='flex flex-col text-lg gap-2'>
          <h2 className='mb-4 font-semibold text-3xl'>Related Webs</h2>
          <a href='https://www.wikidex.net/wiki/WikiDex' className='text-left'>Wikidex</a>
          <a href='https://www.pokexperto.net/index2.php' className='text-left'>Pokexperto</a>
          <a href='https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki' className='text-left'>Pokemon Fandom</a>
          <a href='https://bulbapedia.bulbagarden.net/wiki/Type' className='text-left'>Bulbapedia</a>
          <a href='https://pokemondb.net/type' className='text-left'>Pokemondb</a>
        </article>
      </section>
      <section>
        <strong className='text-2xl'>2025 copywright | All rights reserverd. Pokédex.</strong>
        <p>Developed using <a href='https://pokeapi.co/'>pokeapi.</a></p>
      </section>
    </footer>
  )
}
