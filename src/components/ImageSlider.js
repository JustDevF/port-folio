import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { services as data } from './data';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './ImageSlider.css';

export default function ImageSlider() {
  const [service] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = service.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, service]);

  useEffect(() => {
    let idInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === service.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => {
      clearInterval(idInterval);
    };
  }, [index, service]);

  return (
    <section id="section">
      <div className="title">
        <h2>
          <span>/</span>Explorer
        </h2>
        <p>
        En tant que développeur full-stack, mon métier est très polyvalent. J'assume les fonctions de développeur back-end et front-end, ainsi que de web architecte. Mes missions dépendent des besoins de l'entreprise. Mon profil « touche-à-tout » me permet de réaliser une grande variété de missions de développement dans le digital.
        </p>
      </div>
      <Container fluid  className="w-75">
        <Row>
          <Col xs={12}>
            <Carousel interval={5000} activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)}>
              {service.map((person) => {
                const { id, image, name} = person;
                return (
                  <Carousel.Item key={id}>
                    <img className="d-block w-100" src={image} alt={name} />
                    <Carousel.Caption>
                      <h4>{name}</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <button className="prev" onClick={() => setIndex((prevIndex) => prevIndex - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex((prevIndex) => prevIndex + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
}
