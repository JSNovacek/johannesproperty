import React from 'react';
import LazyHero from 'react-lazy-hero';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import heroSrc from '../assets/images/contact/contact-hero.jpg';

const ContactPage = () => (
  <div className="ContactPage">
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
          <Col md={{ size: 6, offset: 3 }}>
            <h1 className="title-border hero hero-top exo">Get in Contact With us Today</h1>
          </Col>
        </Row>
        <h2 className="subtitle hero hero-top exo">Whether you are interested in one of the many services we provide,
          or simply share the same passion as us, we'd love to hear from you!
        </h2>
      </Container>
    </LazyHero>

    <Container>
      <Row className="contact-title-wrapper d-flex flex-row align-items-end justify-content-between">
        <Col md="6">
          <div className="contact-title">Unlock your property's potential</div>
        </Col>
        <Col md="6">
          <div className="contact-title">Join the team or become a partner</div>
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 10, offset: 1 }}>
          <p className="contact-intro">If you have any questions, or would like to know more, drop us a message below or give us a call!</p>
        </Col>
      </Row>
    </Container>

    <Container className="form-wrapper">
      {/* <Form className="gform" method="POST" action="https://script.google.com/macros/s/AKfycby7G8u3ePMHrmmb9NJMhYRTwl-qkCIpGlPzmrAX7L6kGZpjZBo/exec"> */}
      <Form className="contact-form" name="contact" method="post" action="/thanks" data-netlify="true" data-netlify-honeypot="bot-field">
        <Input hidden name="form-name" value="contact" />
        <Input hidden name="bot-field" />
        <FormGroup className="contact-row" row>
          <Label for="name" md={1}>Name</Label>
          <Col md={4}>
            <Input type="name" name="name" id="name" />
          </Col>
          <Label for="exampleEmail" md={{ size: 1, offset: 1 }}>Email</Label>
          <Col md={4}>
            <Input type="email" name="email" id="exampleEmail" placeholder="example@email.com" />
          </Col>
        </FormGroup>
        <FormGroup className="contact-row" row>
          <Label for="number" md={1}>Number</Label>
          <Col md={4}>
            <Input type="number" name="number" id="number" />
          </Col>
          <Label for="enquiry-type" md={{ size: 1, offset: 1 }}>Enquiry Type</Label>
          <Col md={4}>
            <Input type="select" name="enquiry-type" id="enquiry-type">
              <option>-- Select --</option>
              <option>Airbnb Management</option>
              <option>Property Appraisal</option>
              <option>Buying</option>
              <option>Selling</option>
              <option>Leasing</option>
              <option>Careers/Partnership</option>
              <option>Other</option>
            </Input>
          </Col>
          
        </FormGroup>
        <FormGroup className="contact-row" row>
          <Label for="message" md={1}>Message</Label>
          <Col md={11}>
            <Input type="textarea" name="message" id="message" />
          </Col>
        </FormGroup>
        <Row className="contact-row d-flex flex-column align-items-center">
          <Button>Submit</Button>
        </Row>
        <Row className="contact-info-wrapper d-flex flex-column align-items-center">
          <div className="contact-info">Johannes Property</div>
          <div className="contact-info">info@johannesproperty.com.au</div>
          <div className="contact-info">+61 403 666 671</div>
        </Row>
      </Form>
    </Container>
  </div>
);

export default ContactPage;
