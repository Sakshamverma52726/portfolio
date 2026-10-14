import SkillCard from '../components/SkillCard.jsx'

function Skills(){

  const skills = [
     {
    title: "HTML",
    description: "Building semantic and accessible web structures."
  },
  {
    title: "CSS",
    description: "Creating responsive and visually polished web interfaces."
  },
  {
  title: "JavaScript",
  description: "Adding interactivity and dynamic functionality to web pages."
},
{
  title: "React",
  description: "Building reusable UI components and interactive user interfaces."
},
{
  title: "Tailwind CSS",
  description: "Styling responsive interfaces using utility classes."
},
{
  title: "Git & GitHub",
  description: "Managing code changes and collaborating using version control."
}
  ]

  return(
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
     <h2 className="text-4xl font-bold text-center mb-5">
        Skills
     </h2>
     <p className="text-gray-300 text-center max-w-2xl mx-auto">
        I work with modern frontend technologies to build responsive and interactive web applications.
     </p>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       {skills.map((skill) => (
        <SkillCard
        key={skill.title}
        title={skill.title}
        description={skill.description}
       />
      ))}
       
       </div>
    </section>
  )
}

export default Skills