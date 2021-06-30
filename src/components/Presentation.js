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
                <h1 className="hero-Title">Bienvenue </h1>
                <h3 className="hero-SubTitle">Portfolio personnel</h3>
                <br />
                <br />
                <h1 className="hero-Name">JUSTIN KATASI
                </h1>
                <p className="hero-NameSubTitle">
                    Développeur Freelance Web et Mobile
                </p>
            <div>
            <Link to={`/about`}> <button className="btnHero">Détails </button></Link>
            <button className="btnHero">
                <a href={monCv} download>Mon CV</a>
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
