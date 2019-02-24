import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Media } from 'reactstrap';
import Link from 'gatsby-link';

import SectionTextTop from '../components/SectionTextTop';
import IconCard from '../components/IconCard';

import heroSrc from '../assets/images/property-management/prop-management-hero.jpg';
import heyTomSrc from '../assets/images/hey-tom-white.png';

const PropertyManagementPage = () => (
  <div className="PropertyManagementPage">
    <LazyHero
      imageSrc={heroSrc}
      minHeight="55vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1 className="title-border hero hero-top exo">Property Management</h1>
          </Col>
        </Row>
        <h2 className="subtitle hero hero-top exo">Boost your investment earnings through the short term letting market.</h2>
        <h2 className="subtitle hero exo">We have all the tools to build and manage your successful Airbnb.</h2>
      </Container>
    </LazyHero>

    <div className="heyTom">
      <Container className="heyTom-wrapper">
        <Media className="heyTom-logo" src={heyTomSrc} alt="Hey Tom" />
        <div className="heyTom-text exo">Proudly in partnership with Hey Tom</div>
      </Container>
    </div>
    
    <SectionTextTop
      width="12"
      header="Why our teams are the leaders in Airbnb property management"
      underline
      underlineColor="#31708e"
    />
    <Container>
      <Row className="icon-wrapper">
        <Col md="4">
          <IconCard
            icon="prop-manager"
            iconTitle="Personal Property Manager"
            iconText="We value the personal touch. Each client is assigned their own property manager who is dedicated to ensuring your property is 100% for each guest’s 5 star experience."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="transparency"
            iconTitle="Transparency"
            iconText="Building trust is key.. Working closely with clients and guests builds successful and genuine relationships "
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="flexibility"
            iconTitle="Flexibility"
            iconText="We understand that life is dynamic. Our service is designed to be flexible around your life. It’s your home, use it when needed and let us boost its value when your not home. "
          />
        </Col>
      </Row>
    </Container>

    <SectionTextTop
      width="12"
      header="Our Airbnb services"
      underline
      underlineColor="#31708e"
    />
    <Container>
      <Row className="icon-wrapper">
        <Col md="4">
          <IconCard
            icon="listing-creation"
            iconTitle="Listing Creation"
            iconText="Our team will take care of it all, styling, professional photography, house manual and listing creation ensuring your property is optimised for the Airbnb market."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="guest-management"
            iconTitle="Guest Management"
            iconText="You don’t need to worry about your guests, we have it covered 24/7."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="cleaning"
            iconTitle="Personalized Cleaning & Linen"
            iconText="Each property has its own requirements, your property will have its own cleaner to ensure the highest quality services."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="styling"
            iconTitle="Styling"
            iconText="We know how to set the mood. We use our expertise in styling to evoke emotion - a huge part of your guests experience and satisfaction."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="maintenance"
            iconTitle="Inspections & Maintenance"
            iconText="Accidents happen and items need attending to. Your property manager has all the resources to get any job quickly repaired."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="insurance"
            iconTitle="Insurance"
            iconText="We will guide you through the necessary safety precautions before entering the market."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="listing-seo"
            iconTitle="Listing Search Engine Optimisation (SEO)"
            iconText="We ensure that your property has maximum exposure to the market through multiple social media channels."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="online"
            iconTitle="Online Platforms"
            iconText="We are continually assessing the market to keep our clients in the best position within the market."
          />
        </Col>
        <Col md="4">
          <IconCard
            icon="pricing"
            iconTitle="Dynamic Pricing"
            iconText="Our software tools guide your property manager in pricing the property for success."
          />
        </Col>
      </Row>
    </Container>

    <SectionTextTop
      width="12"
      header="Startup process"
      underline
      underlineColor="#31708e"
    />
    <Container>
      <Row className="icon-wrapper">
        <Col md="3">
          <IconCard
            icon="appraisal"
            iconTitle="Appraisal"
            iconText="Contact us for a free evaluation."
          />
        </Col>
        <Col md="3">
          <IconCard
            icon="inspections"
            iconTitle="Property Inspection"
            iconText="I look forward to meeting you and your home. Let’s make a plan."
          />
        </Col>
        <Col md="3">
          <IconCard
            icon="setup"
            iconTitle="Property Setup"
            iconText="We will do the heavy lifting for you."
          />
        </Col>
        <Col md="3">
          <IconCard
            icon="launch"
            iconTitle="Launch"
            iconText="Time to let us do what we do best."
          />
        </Col>
      </Row>
      <Row className="d-flex flex-column align-items-center">
        <Link className="prop-man-btn button" to="/contact">Contact Us</Link>
      </Row>
    </Container>
  </div>
);

export default PropertyManagementPage;
