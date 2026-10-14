import Skills from './sections/Skills.jsx'
import About from './sections/About.jsx'
import Hero from './sections/Hero.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
    </main>
  );
}

export default App;