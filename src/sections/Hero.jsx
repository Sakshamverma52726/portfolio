function Hero() {
  return (
    <section id="home" className="flex flex-col gap-2 items-center justify-center min-h-screen p-20">
      <h1 className="text-5xl font-black text-orange-600">
       Hi, I'm Saksham
      </h1>
      <h2 className="text-3xl font-light">
        Frontend Developer
      </h2>
      <p className ="text-lg text-gray-400 max-w-xl text-center">
            I build modern, responsive web experiences with React and JavaScript.

      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700">
          view my work
        </button>
        <button className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 ">
         contact me 
        </button>
      </div>
    </section>
  )
}

export default Hero