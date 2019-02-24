import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Icon from './icons/Icon';
import Facebook from './icons/facebook.icon';
import Instagram from './icons/instagram.icon';
import LinkedIn from './icons/linkedin.icon';

const Footer = () => (
  <footer className="Footer page-footer">
    <Container className="text-center text-md-left">
      <Row className="d-flex align-items-center">
        <Col lg="8" md="7">
          <p className="footer-left text-center text-md-left">
            © Johannes Property 2018
          </p>
        </Col>
        <Col lg="4" md="5" className="footer-right ml-lg-0">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="footer-item list-inline-item">
                <a href="https://www.facebook.com/Johannesproperty.com.au/" target="_blank" rel="noopener noreferrer">
                  <Icon icon={Facebook} width={24} height={24} fill={'#fff'} />
                </a>
              </li>
              <li className="footer-item list-inline-item">
                <a href="https://www.instagram.com/johannesproperty/" target="_blank" rel="noopener noreferrer">
                  <Icon icon={Instagram} width={24} height={24} fill={'#fff'} />
                </a>
              </li>
              <li className="footer-item list-inline-item">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Icon icon={LinkedIn} width={25} height={25} fill={'#fff'} />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
