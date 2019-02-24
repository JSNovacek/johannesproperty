import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col } from 'reactstrap';

import SectionTextLeft from '../components/SectionTextLeft';
import SectionTextRight from '../components/SectionTextRight';
import PersonCard from '../components/PersonCard';

import heroSrc from '../assets/images/about/about-hero-main.jpg';
import imgSrc1 from '../assets/images/about/about-img1.jpg';
import imgSrc2 from '../assets/images/about/about-img2.jpg';
import teamSrc from '../assets/images/about/about-hero-team.jpg';
import johanSrc from '../assets/images/about/Johan-bw.png';
import mikeSrc from '../assets/images/about/Mike-bw.jpg';
import cassieSrc from '../assets/images/about/Cassie-bw.jpg';
import vinceSrc from '../assets/images/about/Vince-bw.jpg';

const AboutPage = () => (
  <div className="AboutPage">
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
          <Col md={{ size: 6, offset: 3 }}>
            <h1 className="title-border hero hero-top exo">About Us</h1>
          </Col>
        </Row>
        <h2 className="subtitle hero hero-top exo">We are just a bunch of passionate individuals looking to help you out</h2>
      </Container>
    </LazyHero>

    <SectionTextRight
      headerColor="#31708e"
      header="Our Story:"
      content="Johannes Property was established in early 2017 with soul forces in
        answering the following: How can our team enhance the success of your property
        portfolio? Founder Johannes Novacek comes from a background of design and project
        management within the construction industry. He has always had a passion to solve
        each and every puzzle that confronts him, no matter how big or small. Working through
        Sydney’s property boom, Johannes quickly noticed a massive inefficiency in the way
        property was being transacted and managed. Soon enough his desire to crack the way
        we view and navigate the real estate minefield was far too great and Johannes
        Property was developed."
      contentSecondary="Passionately unpacking various elements of the real-estate market, Johannes and his
      team have been able to analyze and build solutions that help investors achieve a higher
      value for their property. Having a dynamic hands-on approach, Johannes Property continues
      to analyse the market and design innovative solutions for each client."
      imageSrc={imgSrc1}
    />

    <SectionTextLeft
      headerColor="#31708e"
      header="Vision Statement:"
      content="To develop and offer the highest quality property solutions that are accessible to all people."
      imageSrc={imgSrc2}
    />

    <LazyHero
      imageSrc={teamSrc}
      minHeight="35vh"
      color="#777"
      opacity="0.55"
    >
      <Container>
        <h1
          className="title hero hero-med exo"
        >Meet The Team</h1>
        <h2
          className="subtitle hero hero-med"
        >We are all-hands-on to ensuring you get the most out of your investment property.</h2>
      </Container>
    </LazyHero>
    <Container>
      <Row className="team-wrapper">
        <Col md="3">
          <PersonCard
            imageSrc={johanSrc}
            name="Johannes"
            title="Founder"
            text="Coming from a background of project management and design, Johannes'
              passion to solve any puzzle that confronts him has generated his desire
              to crack the way we view and manage the real estate minefield. After working
              within the construction and real estate industry for over 5 years, Johannes
              learned that property could be refined to a much higher level."
          />
        </Col>
        <Col md="3">
          <PersonCard
            imageSrc={cassieSrc}
            name="Cassie"
            title="Reception"
            text="Cassie has more than 10 years of experience in hospitality and 2 university
              degrees under her belt. Her advanced skills in organisation and her attention to
              detail are crucial in keeping us on track."
          />
        </Col>
        <Col md="3">
          <PersonCard
            imageSrc={vinceSrc}
            name="Vince"
            title="Finance"
            text="Vince has a key position within the team taking care of all our finance needs.
              As a chartered accountant for more than 25 years, his knowledge and skills are
              very much appreciated."
          />
        </Col>
        <Col md="3">
          <PersonCard
            imageSrc={mikeSrc}
            name="Mike"
            title="Web Developer"
            text="A software developer from San Diego, Mike brings his love and skill for web design
              to the team. Using his software engineering background, he also assists with any tech
              tasks behind the scenes."
          />
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutPage;
