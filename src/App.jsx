import About from './sections/About.jsx'
import Hero from './sections/Hero.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar/>
     <Hero/>
     <About/>
    </main>
  );
}

export default App;