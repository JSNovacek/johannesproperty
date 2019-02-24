import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col } from 'reactstrap';
import Link from 'gatsby-link';

import SectionTextTop from '../components/SectionTextTop';
import ImageAndText from '../components/ImageAndText';

import heroSrc from '../assets/images/services/services-hero.jpg';
import investmentSrc from '../assets/images/services/services-investment-advice.jpg';
import stylingSrc from '../assets/images/services/services-property-styling.jpg';
import maintenanceSrc from '../assets/images/services/services-property-maintenance.jpg';
import cleaningSrc from '../assets/images/services/services-cleaning.jpg';
import managementSrc from '../assets/images/services/services-prop-management.jpg';
import financingSrc from '../assets/images/services/services-financing.jpg';

const ServicesPage = () => (
  <div className="ServicesPage">
    <LazyHero
      imageSrc={heroSrc}
      minHeight="50vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="title-border hero hero-top exo">Services</h1>
          </Col>
        </Row>
        <h2 className="subtitle hero hero-top exo">All the services you need, in one convenient location</h2>
      </Container>
    </LazyHero>
    <SectionTextTop
      customClass="services-main"
      width="10"
      offset="1"
      headerColor="#31708e"
      header="Every property is unique with its own path to success"
      content="Let us do the hard work in building that path and ensuring
        your property delivers the returns you have always wished for. "
      underline
    />
    <Container className="services-main-wrapper">
      <ImageAndText
        imageSide="left"
        imageSrc={investmentSrc}
        header="Investment Advice"
        headerColor="#31708e"
        content="Need help deciding what path you need to take? We will help you achieve your goals."
      />
      <ImageAndText
        imageSide="right"
        imageSrc={stylingSrc}
        header="Property Styling"
        headerColor="#31708e"
        content="We know how to set the mood. Our teams will transform your property so that it's ready for any occasion."
      />
      <ImageAndText
        imageSide="left"
        imageSrc={maintenanceSrc}
        header="Property Maintenance"
        headerColor="#31708e"
        content="No job is to big or small."
      />
      <ImageAndText
        imageSide="right"
        imageSrc={cleaningSrc}
        header="Cleaning"
        headerColor="#31708e"
        content="A well presented and clean property can make all the difference when coming home after a long day.
          Or maybe you need Airbnb cleaning? Whatever the situation is, our teams are passionate in ensuring your
          property is left sparkling clean after every occasion."
      />
      <ImageAndText
        imageSide="left"
        imageSrc={managementSrc}
        header="Property Management Systems"
        headerColor="#31708e"
        content="Access to quality information is key in a fast moving industry. We are believers in technology and
          have harnessed the power of the leading edge software system, to assist us in delivering the very best
          service to you."
      />
      <ImageAndText
        imageSide="right"
        imageSrc={financingSrc}
        header="Financing"
        headerColor="#31708e"
        content="Need help getting your foot in the door? We understand property finance, offering innovative market lending property solutions."
      />
      <Row className="d-flex flex-column align-items-center">
        <Link className="services-btn button" to="/contact">Contact us today</Link>
      </Row>
    </Container>
  </div>
);

export default ServicesPage;
