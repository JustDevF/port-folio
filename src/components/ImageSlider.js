import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {services as data}  from './data';
import './ImageSlider.css' 

export default function ImageSlider() {
  //Etat init objet data
  const [service] = useState(data);
  //Etat init entier
  const [index, setIndex] = React.useState(0);

  //Phase de montage 
  //Dépendances 
  //Mise à jour de l'état d'index
  useEffect(() => {
    const lastIndex = service.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, service]);

  //Phase de montage 
  //Mise à jour automat de l'état d'index
  useEffect(() => {
    let idInterval = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(idInterval);
    };
  }, [index]);

  return (
    <section id="section">
      <div className="title">
        <h2>
          <span>/</span>Métiers
        </h2>
        <p> Etant un développeur full-stack mon  métier est très polyvalent, je cumule les fonctions de développeur back-end et front-end ainsi que web architect… Mes missions dépendent des besoins de l'entreprise, Mon profil « touche-à-tout » est capable de réaliser une grande variété de missions de développeur dans le digital.</p>
      </div>
      <div id="section-center">
        {service.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === service.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article id="articleSlider" className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

