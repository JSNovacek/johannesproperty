/* global graphql */

import React from 'react';
// import Features from '../components/Features';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col } from 'reactstrap';
import SectionTextTop from '../components/SectionTextTop';
import SectionTextLeft from '../components/SectionTextLeft';
import SectionTextRight from '../components/SectionTextRight';
import Icon from '../components/icons/Icon';
import JPLogo from '../components/icons/jp-logo-white-2.icon';

import heroSrc1 from '../assets/images/home/home-hero-main.jpg';
import heroSrc2 from '../assets/images/home/home-hero2.jpg';
import imgSrc1 from '../assets/images/home/home-image1.jpg';
import imgSrc2 from '../assets/images/home/home-image2.jpg';

const HomePage = () => (
  <div className="HomePage">
    {/* <Features data={props.data.allDataJson.edges[0].node.features} /> */}
    <LazyHero
      imageSrc={heroSrc1}
      minHeight="75vh"
      color="#777"
      opacity="0.55"
      isCentered
      parallaxOffset={100}
    >
      <Container>
        <Row className="d-flex flex-row align-items-center justify-content-center">
          <Col md="9">
            <h1 className="mainTitle hero hero-top exo">Welcome to Johannes Property</h1>
          </Col>
          <Col md="3">
            <Icon className="jp-logo-hero" icon={JPLogo} width={200} height={200} fill={'#fff'} />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="subtitle hero hero-top exo main-sub">Delivering innovative property solutions through collaboration and dynamic design</h2>
          </Col>
        </Row>
      </Container>
    </LazyHero>
    <SectionTextTop
      width="10"
      offset="1"
      headerColor="#31708e"
      header="At Johannes Property, we are here to help"
      content="Johannes Property transforms ordinary spaces into extraordinary assets.
        We believe passionately in the power of collaboration, which empowers us to
        think outside the box. Everything we do from design and development, to implementation,
        is driven by this goal: How can can our team enhance the success of your property
        portfolio?"
      underline
    />
    <SectionTextLeft
      headerColor="#31708e"
      header="Get more from your property"
      content="Is your property truly performing in the way that you intended? Let us work with
        you to show you how that dream can become a reality. Higher satisfaction through
        increased creativity to reach maximum revenue, all with less stress."
      imageSrc={imgSrc1}
    />
    <LazyHero
      imageSrc={heroSrc2}
      minHeight="35vh"
      color="#777"
      opacity="0.55"
    >
      <Container>
        <h1
          className="title-lower hero hero-med exo"
        >Our company vision has always been simple...</h1>
        <h2
          className="subtitle hero hero-med"
        >To develop and offer the highest quality property solutions that are accessible to all people.</h2>
      </Container>
    </LazyHero>
    <SectionTextRight
      headerColor="#31708e"
      header="We have the resources to do so"
      content="Whether the real estate challenge is big or small, we have the resources and skills
        you need to transform your property into an extraordinary asset."
      imageSrc={imgSrc2}
    />
  </div>
);

export default HomePage;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allDataJson {
//       edges {
//         node {
//           home {
//             heroTitle
//             heroSubtitle
//             content
//           }
//         }
//       }
//     }
//   }
// `;
