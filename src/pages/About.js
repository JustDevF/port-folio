import React from 'react'
import './About.css'

//La page about

//Le composant de la page 
const About = () => {
  return (
    <section >
        <div className="serviceTitle">
            <h2>A-propos</h2>
            <div className='underlineService'></div>
         </div>
        <p className="sectionAbout">Bonjour, je m'appelle Justin Katasi et je suis un développeur full-Stack junior 
          Je construis ma carrière à partir de ce que j'aime vraiment. 
          J’ai perfectionné mes compétences en tant que développeur Full-Stack Web, mobile en créant des applications Web et mobile avec Java, Python, PHP, JavaScript, React, Node, HTML, CSS, MySQL. 
        </p>
    </section>
  )
}

export default About