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
                    <p>Je suis Justin Katasi, étudiant en deuxième année de BTS SIO option SLAM(Solutions Logicielles et Application Métier) au Lycée du Parc des Loges à Evry dans le 91. Passionné par le développement informatique depuis 3 ans, particulièrement les technologies Web et mobile, Je construis ma carrière à partir de ce que j'aime vraiment. Je perfectionne mes compétences en créant des applications Web et mobile à l'aide de : PHP, JavaScript, HTML, CSS, Figma, MySQL, React, Node,Java, Python... Dans le but de pouvoir acquerier des nouvelles compétences, je poursuis mes études en master dans l'ingérie du Web </p>
                    <Link to={`/about`}> <button className="btnHero">Plus de détails </button></Link>
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
