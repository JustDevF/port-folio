import React from 'react';
import cvImage from './impage-cv.png';
import monCv from './cv_justin_katasi.pdf';
import { Link } from 'react-router-dom';
import './hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const elements = [
  { id: 1, texte: 'Front : ReactJS/NextJS/TypeScript/Taillwind.css' },
  { id: 2, texte: 'Back : NodeJS/NestJS/' },
  { id: 3, texte: 'Bases de données : MongoDB/MySQL/Firebase' },
  { id: 4, texte: 'API : RESTfull/GraphQL' },
  { id: 5, texte: 'Devops: CI-CD/Docker/GitLab' },
];

const Presentation = () => {

  return (
    <div>
      <section className="hero">
        <div className="hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1 className="hero-Title">Hello ! </h1>
            <h3 className="hero-SubTitle">Développeur Web FullStack</h3>
            <br />
            <br />
            <div>
              <button className="btnHeroTitle">Qui suis-je ?</button>
              <p>
                Etudiant en Master Ingénierie du web à L'ESGI paris. développeur web fullstack chez Sustainsoft. Stack
                Techniques
              </p>
              <h1>Stack technique :</h1>
              <ul className="list-group border-0 bg-light">
                {elements.map((element) => (
                  <li className="list-group-item text-muted border-0" key={element.id}>
                    {element.texte}
                  </li>
                ))}
              </ul>
              <Link to={`/about`}>
                <button className="btnHero">Mon parcours</button>
              </Link>
              <button className="btnHero">
                <a href={monCv} target="_blank" rel="noreferrer">
                  Mon CV
                </a>
              </button>
            </div>
          </article>
          <article className="hero-images">
            <img src={cvImage} className="phone-img" alt="phone" />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
