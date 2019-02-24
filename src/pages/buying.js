import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row } from 'reactstrap';
import Link from 'gatsby-link';

import SectionTextRight from '../components/SectionTextRight';

import heroSrc from '../assets/images/buying/buying-hero.jpg';
import imgSrc from '../assets/images/buying/buying-main.jpg';

const BuyingPage = () => (
  <div className="BuyingPage">
    <LazyHero
      imageSrc={heroSrc}
      minHeight="70vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <h1 className="title-border hero hero-top exo">Buying Real Estate</h1>
      </Container>
    </LazyHero>
    <SectionTextRight
      customClass="buying-main"
      content="Buying a property is extremely exciting and equally as challenging.
        Where do you begin when there are so many things to consider? Johannes
        Property is committed to guiding you through the process and ensuring the
        property meets all your needs. From family homes and holiday escapes, to
        lucrative investment properties, our agents are here to make that vision come to life."
      imageSrc={imgSrc}
    />
    <Container>
      <Row className="d-flex flex-column align-items-center">
        <Link className="buying-btn button" to="/contact">Organise a free property appraisal</Link>
      </Row>
    </Container>
  </div>
);

export default BuyingPage;
