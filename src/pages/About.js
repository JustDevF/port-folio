import React from 'react'
import './About.css'
import monCv from '../components/cv_justin_katasi.pdf'
import MenuCertif from '../components/MenuCertif/MenuProjet'

// La page about

const diplomas = [
  {
    id: 1,
    logo: 'imagesProjet/esgi-img.jpeg',
    title: 'Master Ingénierie du Web',
    subTitle: 'Développeur Web Fullstack',
    period: 'Paris : 2023-2025'
  },
  {
    id: 2,
    logo: 'imagesProjet/logo_hetic.png',
    title: 'Bachelor Développement Web',
    subTitle: 'Concepteur développeur de solution Digitales',
    period: 'Montreuil : 2022-2023'
    },
  {
    id: 3,
    logo: 'imagesProjet/logo_codecademy.png',
    title: 'CodeCademy',
    subTitle: 'Développement Web fullstack',
    period: 'En-ligne : 2020-2022'
  },
  {
    id: 4,
    logo: 'imagesProjet/lpdl.jpg',
    title: 'BTS SIO SLAM',
    subTitle: 'Services Informatiques aux Organisations. option SLAM (Solutions Logicielles et Applications Métiers))',
    period: 'Evry-Courcouronnes : 2020-2022'
  },
  {
    id: 5,
    logo: 'imagesProjet/logo-lgb-mini.png',
    title: 'BAC PRO SN RISC',
    subTitle: 'Systèmes numériques Option C : réseaux informatiques et systèmes communicants (RISC)',
    period: 'Evry-Courcouronnes : 2017-2020'
  }
];

const experiences = [
  {
    id: 1,
    logo: 'imagesProjet/sustainsoft-img.png',
    location: 'Paris',
    period: '2022-2023',
    description: [
     'SustainSoft est un logiciel SaaS qui aide les entreprises à mesurer, piloter et communiquer leur stratégie RSE.'
    ]
  },
  {
    id: 2,
    logo: 'imagesProjet/orange_logo.png',
    location: 'Paris',
    period: '2022/3 mois',
    description: [
      'Conception de maquette d\'une application mobile',
      'Développement de l\'application mobile',
      'Fusion de l\'application mobile au site Web'
    ]
  },
  {
    id: 3,
    logo: 'imagesProjet/kara_logo.jpg',
    location: 'Kara',
    period: '2021/3 mois',
    description: [
      'Conception de maquette de site Web',
      'Développement de site Web',
      'Déploiement de site web'
    ]
  },
  {
    id: 4,
    logo: 'imagesProjet/orange_logo.png',
    location: 'Évry',
    period: '2020/ 1 mois',
    description: [
      'Conception de maquette de site Web',
      'Développement des scripts Bash sur Linux',
      'Intégration continue des ressources'
    ]
  },
  {
    id: 5,
    logo: 'imagesProjet/logo-aurore.jpg',
    location: 'Paris',
    period: '2019/1 mois',
    description: [
      'Assistance à la configuration de switch et de routeurs',
      'Gestion des postes informatiques',
      'Maintenance des équipements de réseau'
    ]
  }
];

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
                
              <div class="container">
                <div class="row">
                  {diplomas.map(diploma => (
                    <div class="col-md-4 mb-4">
                      <div class="card">
                        <img src={diploma.logo} class="card-img-top" alt="logo_image_hetic" />
                        <div class="card-body">
                          <h5 class="card-title">{diploma.title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">{diploma.subTitle}</h6>
                          <p class="card-text">{diploma.period}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              </div>
            </section>
            <section className='formationSec'>
              <header className='major'>
                <h3 id="formation">Expériences professionnelles</h3>
              </header>
              <p> Mes expériences professionnelles m’ont permises de rentre en contact et  de m'inséser dans le monde professionnel de l'informatique.</p>
              <div className='contenaireComp'>

              <div class="container">
                <div class="row">
                  {experiences.map(exp => (

                    <div class="col-md-4 mb-4">
                      <div class="card">
                        <img src={exp.logo} class="card-img-top" alt="logo_image_hetic" />
                        <h5 class="card-title">{exp.location}</h5>
                        <div class="card-body">
                          <h6 class="card-subtitle mb-2 text-muted">{exp.description}</h6>
                          <p class="card-text">{exp.period}</p>
                        </div>
                      </div>
                    </div>

                  ))}
                </div>
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