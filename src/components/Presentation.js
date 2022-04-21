import React from 'react'
import cvImage from './impage-cv.png';
import monCv from './cv_justin_katasi.pdf'
import { Link } from 'react-router-dom'

import './hero.css'

//Le composant
const Presentation = () => {
 return (
  <div>
      <section className="hero">
        <div className="hero-center">
            <article className="hero-info">
                <div className='underline'></div>
                <h1 className="hero-Title">Bonjour et bienvenue </h1>
                <h3 className="hero-SubTitle">sur mon portfolio personnel !</h3>
                <br />
                <br />
                {/*Qui suis-je*/}
                <div>
                    <button className="btnHeroTitle">Qui suis-je ?</button>
                    <p>Je suis Justin Katasi, étudiant en 3<sup>ème</sup> année de Bachelor développement Web à Hetic. Ayant plus de 4 ans d’expériences dans le développement Fullstack. 
                     </p>
                     <p>
                     Passionné par le développement informatique, particulièrement les technologies du Web et d'Internet. Je construis ma carrière à partir de ce que j'aime vraiment. Je perfectionne mes compétences en créant des projets et des applications Web et Mobile à l'aide de : JavaScript, PHP, Java, Python , HTML, CSS, Figma, MySQL, React.js, Node.js...
                     </p>
                    <p>J'envisage de poursuivre mes études en master CTO tech Lead à Hetic pour me permettre de rester en veille technologique et de devenir un expert en développement informatique et les technologies internet.
                   </p>
                   <p> Je suis une personne sociable, motivée, dynamique, automne et qui cherche toujours à s’améliorer.</p>
                    <Link to={`/about`}> <button className="btnHero">Mon parcours</button></Link>
                    <button className="btnHero">
                    <a href={monCv} target="_blank" rel="noreferrer">Mon CV</a>
                    </button>
                </div>
            </article>
            <article className="hero-images">
                <img src={cvImage} className="phone-img" alt="phone" />
                
            </article>
        </div>
      </section>
  </div>
 )
}

export default Presentation
