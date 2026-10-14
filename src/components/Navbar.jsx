function Navbar(){
    return(
     <nav className="flex justify-between items-center px-20 py-4 border-b border-gray-800">
  <div className="font-bold text-xl">
    Saksham
  </div>

  <div className="flex gap-6">
  <a href="#home" className="text-gray-300 transition-colors hover:text-orange-500">Home</a>
  <a href="#about" className="text-gray-300 transition-colors hover:text-orange-500">About</a>
  <a href="#skills" className="text-gray-300 transition-colors hover:text-orange-500">Skills</a>
  <a className="text-gray-300 transition-colors hover:text-orange-500">Projects</a>
  <a className="text-gray-300 transition-colors hover:text-orange-500">Contact</a>
</div>

  <div className="flex gap-6">
    <a className="transition-colors hover:text-orange-500" href="">GitHub</a>
    <a className="transition-colors hover:text-orange-500" href="">LinkedIn</a>
  </div>
</nav>
    )
}

export default Navbar