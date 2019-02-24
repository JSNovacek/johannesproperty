import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row } from 'reactstrap';
import Link from 'gatsby-link';

import SectionTextLeft from '../components/SectionTextLeft';

import heroSrc from '../assets/images/selling/selling-hero.jpg';
import imgSrc from '../assets/images/selling/selling-main.jpg';

const SellingPage = () => (
  <div className="SellingPage">
    <LazyHero
      imageSrc={heroSrc}
      minHeight="70vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <h1 className="title-border hero hero-top exo">Selling Real Estate</h1>
      </Container>
    </LazyHero>
    <SectionTextLeft
      customClass="selling-main"
      content="Selling a property can be an emotional experience through which we
        are committed to providing you support and guidance. In reality, selling a
        property could be as simple as connecting buyer and seller. However, Johannes
        Property is focused on building life time relationships. We will go above and
        beyond to deliver a premium price for your property."
      imageSrc={imgSrc}
    />
    <Container>
      <Row className="d-flex flex-column align-items-center">
        <Link className="selling-btn button" to="/contact">Organise a free property appraisal</Link>
      </Row>
    </Container>
  </div>
);

export default SellingPage;
