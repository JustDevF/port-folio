import React from 'react'
import './About.css'
import './projetPro.css'

//Le composant de la page 
const ProjetPro = () => {
    return (
      <section >
          <div className="contenairPP">
          <section className='formationSec'>
              <header className='major'>
                <h3 id="formation">Ecole intégrée</h3>
              </header>
              <p>
              J'intègre dès la rentrée prochaine (Septembre 2022) l'école HETIC à Monteuil en 3ème année de bachelor développement Web en apprentissage. J'envisage par la suite d'intégrer le master CTO tech lead dans cette école pour me permettre de devenir un expert en développement et technologies internet.
              </p>
          </section>
          <section className='formationSec'>
              <header className='major'>
                <h3 id="formation">Métier(s) envisagé(s)</h3>
                <ul>
                    <li>Développeur FullStack</li>
                    <li>Développeur front-end et back-end</li>
                    <li>Devops</li>
                    <li>Développeur mobile natif</li>
                    <li>UI / UX desgner</li>
                    <li>Lead Developer (Front, Back, Mobile)</li>
                    <li>Architecte (Logiciel, Base de données, Solutions Cloud)</li>
                    <li>Responsable qualité et performance</li>
                    <li>CTO</li>
                </ul>
                
              </header>
          </section>
             
          </div>
      </section>
    )
  }
  
  export default ProjetPro