import React from 'react';
import { competences } from './data';
import { Row, Col, Container } from 'react-bootstrap';
import './Services.css';

const Services = () => {
  return (
    <div>
      <div className="serviceTitle">
        <h2>Soft skills</h2>
        <div className="underlineService"></div>
        <p>
          Les qualités essentielles pour répondre aux exigences du métier de
          développeur informatique incluent l'autoformation, la logique, la
          rigueur, le pragmatisme, l'autonomie, la capacité à s'adapter
          rapidement et à être à l'écoute des autres.
        </p>
      </div>
      <section className="main-content-benefits">
        <Container>
          <Row className="clearfix">
            {competences.map((competence) => {
              const { image, title, description, classe, id } = competence;
              return (
                <Col key={id} md={4} className="item">
                  <div className="item-image">
                    {image}
                    <h4 className={classe}>{title}</h4>
                    <p>{description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
