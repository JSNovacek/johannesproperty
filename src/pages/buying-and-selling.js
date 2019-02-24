import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col } from 'reactstrap';

import TextImage from '../components/TextImage';

import heroSrc from '../assets/images/buying-and-selling/buy-sell-hero.jpg';
import buySrc from '../assets/images/buying-and-selling/buy-sell-buying.jpg';
import sellSrc from '../assets/images/buying-and-selling/buy-sell-selling.jpg';

const BuyingAndSellingPage = () => (
  <div className="BuyingAndSellingPage">
    <LazyHero
      imageSrc={heroSrc}
      minHeight="70vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="title-border hero hero-top exo">Buying & Selling</h1>
          </Col>
        </Row>
        <h2 className="subtitle hero hero-top exo">Whether you're looking to buy or sell with us, we've got you covered.</h2>
      </Container>
    </LazyHero>
    <Container>
      <Row className="buy-sell-wrapper">
        <Col className="d-flex flex-row justify-content-between">
          <TextImage
            imgSrc={buySrc}
            href="/buying"
            text="Buying"
            width="75%"
            height="300px"
          />
          <TextImage
            imgSrc={sellSrc}
            href="/selling"
            text="Selling"
            width="75%"
            height="300px"
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default BuyingAndSellingPage;
