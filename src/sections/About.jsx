function About(){
    return(
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-5">About Me</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
            I'm a BCA graduate and aspiring Frontend Developer focused on building responsive and interactive web applications. I'm currently strengthening my skills in React, JavaScript, and modern frontend development while working on real-world projects.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
           <div className="p-4 border rounded-lg bg-gray-900 w-full" >
           <h3 className="font-semibold">Frontend Development</h3>
           <p className="text-gray-300 mt-2 text-sm">
            Building responsive and interactive web interfaces
            </p>
           </div>
           <div className="p-4 border rounded-lg bg-gray-900 w-full">
            <h3 className="font-semibold">React</h3>
            <p className="text-gray-300 mt-2 text-sm">
            Creating component-based interfaces with React
            </p>
           </div>
           <div className="p-4 border rounded-lg bg-gray-900 w-full">
            <h3 className="font-semibold">JavaScript</h3>
            <p className="text-gray-300 mt-2 text-sm">
            Building interactive web functionality with JavaScript
            </p>
           </div>
        </div>
    </section>
    )
}

export default About