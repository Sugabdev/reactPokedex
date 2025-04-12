import { PokemonList } from './components/PokemonList.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

function App () {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-[url("./assets/pokedex.png")] bg-no-repeat bg-cover flex justify-center items-center py-24'>
        <PokemonList />
      </main>
      <Footer />
    </>
  )
}

export default App
