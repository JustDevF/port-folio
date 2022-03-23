import React from 'react'
import './About.css'

//La page about

//Le composant de la page 
const About = () => {
  return (
    <section >
        <div className="serviceTitle">
            <h2>Mon parcours</h2>
            <div className='underlineService'></div>
            <section className='formationSec'>
              <header className='major'>
              <h3 id="formation">Formations</h3>
              </header>
              <p>Les choix de mes diplômes, entreprises, projets et certifications sont influencés par ma passion pour l'informatique et le numérique.</p>
              <div className='parcoursContainer'>
                <div className="parcoursBacPro">
                  <img src="imagesProjet\lpdl.jpg" width="100" alt="logo_image_lpd" />
                  <h3>BTS SIO SLAM</h3>
                  <h4>Services Informatiques aux Organisations. option SLAM (Solutions Logicielles et Applications Métiers)) </h4>
                  <div className='periode'>Evry-Courcouronnes : 2020-2022</div>
                </div>
                <div className="parcoursBacPro">
                    <img src="imagesProjet\logo-lgb-mini.png" width="200" alt="logo_image_lgb" />
                    <h3>BAC PRO SN RISC</h3>
                    <h4>Systèmes numériques Option C : réseaux informatiques et systèmes communicants (RISC) </h4>
                    <div className='periode'>Evry-Courcouronnes : 2017-2020</div>
                </div>
              </div>
            </section>
            <section className='formationSec'>
              <header className='major'>
                <h3 id="formation">Expériences professionnelles</h3>
              </header>
            </section>
            <h3>Mes Compétences téchniques</h3>
            <h3>Mes Centres d'intérêts</h3>
            <h3>Consulter mon CV pour plus de détail</h3>
         </div>
    </section>
  )
}

export default About