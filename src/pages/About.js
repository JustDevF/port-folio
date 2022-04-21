import React from 'react'
import './About.css'
import monCv from '../components/cv_justin_katasi.pdf'
import MenuCertif from '../components/MenuCertif/MenuProjet'


//La page about

//Le composant de la page 
const About = () => {
  return (
    <section >
        <div className="contenairAbout">
            <h2>Mon parcours</h2>
            <div className='underlineService'></div>
            <section className='formationSec'>
              <header className='major'>
                <h3 id="formation">Formations</h3>
              </header>
              <p>Les choix de mes diplômes, entreprises, projets et certifications sont influencés par ma passion pour l'informatique et le numérique.</p>
              <div className='parcoursContainer'>
                <div className="parcoursBacPro">
                  <img src="imagesProjet\logo_hetic.png" width="90" alt="logo_image_hetic" />
                  <h3>Bachelor Développement Web</h3>
                  <h4>Concepteur développeur de solution Digitales</h4>
                  <div className='periode'>Montreuil : 2022-2023</div>
                </div>
              </div>
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
              <p> Mes expériences professionnelles m’ont permises de rentre en contact et  de m'inséser dans le monde professionnel de l'informatique.</p>
              <div className='contenaireComp'>
                <div className='comp1'>
                  <img src='imagesProjet\kara_logo.jpg' width="100" alt=""/>
                  <h3>Kara</h3>
                  <h4 className='periode'>2022 | Stage en développement-Mobile  </h4>
                  <div> Réalisations :</div>
                  <ul>
                    <li>•	Conception de maquette d'une application mobile</li>
                    <li>•	Développement de l'application mobile</li>
                    <li>•	Fusion de l'applciation mobile au site Web </li>
                  </ul>
                </div>
                <div className='comp1'>
                  <img src='imagesProjet\kara_logo.jpg' width="100" alt=""/>
                    <h3>Kara</h3>
                    <h4 className='periode'>2021 | Stage en développement-Web  </h4>
                    <div>Réalisations :</div>
                  <ul>
                      <li>•	Conception de maquette de site Web</li>
                      <li>•	Développement de site Web </li>
                      <li>•	Déploiement de site web </li>
                  </ul>
                </div>
                <div className='comp1'>
                  <img src='imagesProjet\orange_logo.png' width="104" alt=""/>
                    <h3>Évry</h3>
                    <h4 className='periode'> 2020 | Stage en développement informatique  </h4>
                    <div>Réalisations:</div>
                  <ul>
                      <li>•	Conception de maquette de site Web</li>
                      <li>•	Développement des scripts Bash sur Linux</li>
                      <li>•	Intégration continue des ressources</li>
                  </ul>
                </div>
                <div className='comp1'>
                 <img src='imagesProjet\logo-aurore.jpg' width="230" alt="imageAssociationAurore"/>
                    <h3>Paris</h3>
                    <h4 className='periode'> 2019 | Stage en assistant administrateur réseau</h4>
                    <div>Réalisations :</div>
                  <ul>
                      <li>•	Mise en place de l’infrastructure réseau cloud computing)</li>
                      <li>• Maintenance des systèmes </li>
                  </ul>
                  
                </div>
            </div>
            </section>
            <section className='formationSec'>
                <header className='major'>
                  <h3 id="formation">Mon CV</h3>
                </header>
                <div className='contenairCv'>
                    <div className='cvElt1 cvElt'>
                      <ul>
                        <li>PHP</li>
                        <li>Javascrip</li>
                        <li>Java</li>
                        <li>Python</li>
                      </ul>
                    </div>
                    <div className='cvElt2 cvElt'>
                      <ul>
                        <li>SQL</li>
                        <li>MySQL</li>
                        <li>PostSQL</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                      </ul>
                    </div>
                    <div className='cvElt3 cvElt'>
                      <ul>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>JQuery</li>
                      </ul>
                    </div>
                    <div className='cvElt4 cvElt'>
                      <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Netlify</li>
                        <li>Docker</li>
                      </ul>
                    </div>
                    <div className='cvElt5 cvElt'>
                      <ul>
                        <li>HTM</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Boostrap</li>
                      </ul>
                    </div>
                  </div>
                  <button className="btnHero">
                    <a href={monCv} target="_blank" rel="noreferrer">Télecharger mon cv</a>
                  </button>
            </section>

            <section className='formationSec'>
                <header className='major'>
                  <h3 id="formation">Mes certifications</h3>
                </header>
                <MenuCertif />
            </section>
            <section className='formationSec'>
                <header className='major'>
                  <h3 id="formation">Centres d'intérêts</h3>
                </header>
                <p> Je m'occupe comme je peux !!</p>
                <div className='ContenairCI'>
                  <img src="imagesProjet\natation_img.jpg" alt="imageNatation" />
                  <h3 id="ctTitle">Natation</h3>
                </div>
                <div className='ContenairCI'>
                  <img src="imagesProjet\linkedin.jpg" alt="imageLinkedin" />
                  <h3 id="ctTitle">Réseaux sociaux</h3>
                </div>
                <div className='ContenairCI'>
                  <img src="imagesProjet\fitness_park.jpg" alt="imageFitnessPark" />
                  <h3 id="ctTitle">Musculation</h3>
                </div>
              </section>
         </div>
    </section>
  )
}

export default About