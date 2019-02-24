import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row } from 'reactstrap';
import Link from 'gatsby-link';

import SectionTextRight from '../components/SectionTextRight';

import heroSrc from '../assets/images/renting/renting-hero.jpg';
import imgSrc from '../assets/images/renting/renting-main.jpg';

const RentingPage = () => (
  <div className="RentingPage">
    <LazyHero
      imageSrc={heroSrc}
      minHeight="70vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <h1 className="title-border hero hero-top exo">Leasing with Johannes Property</h1>
      </Container>
    </LazyHero>
    <SectionTextRight
      customClass="renting-main"
      content="Investing in property is a fantastic way to unlocking financial freedom, if
        managed correctly. After many years of development, Johannes Property brings together
        experience, expertise and enthusiasm to create innovative property solutions. We develop
        management strategies for investment properties to maximise returns for valued clients.
        With a hands on approach we will find the right tenant and price for your property."
      imageSrc={imgSrc}
    />
    <Container>
      <Row className="d-flex flex-column align-items-center">
        <Link className="renting-btn button" to="/contact">Organise a free property appraisal</Link>
      </Row>
    </Container>
  </div>
);

export default RentingPage;
