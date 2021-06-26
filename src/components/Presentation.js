import React from 'react'
import cvImage from './impage-cv.png';
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
                    Developpeur Freelance Web et Mobile
                </p>
            <div>
            <button className="btnHero">
                Détails
            </button>
            <button className="btnHero">
                CV
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
