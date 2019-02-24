import React from 'react';
import Link from 'gatsby-link';
import { Container, Row, Col } from 'reactstrap';

const ThanksPage = () => (
  <div className="ThanksPage">
    <Container>
      <Row className="thanks-wrapper d-flex flex-column align-items-center">
        <Col md={{ size: 8, offset: 2 }}>
          <h1 className="thanks-top hero hero-top exo">Thank you for contacting us!</h1>
          <h3 className="thanks-sub hero hero-top exo">We will get back to you soon.</h3>
        </Col>
        <Col md={{ size: 8, offset: 2 }}>
          <Link className="thanks-btn button" to="/">Back to Main</Link>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ThanksPage;
