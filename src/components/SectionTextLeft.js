import React from 'react';
import { Container, Row, Col, Button, Media } from 'reactstrap';

const SectionTextLeft = props => (
  <div className={`SectionTextLeft ${props.customClass}`} style={{ backgroundColor: `${props.bgColor}` }}>
    <Container className="sec-tl-wrapper">
      <Row>
        <Col md="6" className="sec-tl-left">
          <div className="sec-tl-header exo" style={{ color: `${props.headerColor}` }}>{props.header}</div>
          <div className="sec-tl-content">{props.content}</div>
          {props.btnText &&
            <Button
              className="sec-tl-btn"
              size="md"
              color="secondary"
              outline
              onClick={props.onClick}
            >
              {props.btnText}
            </Button>
          }
        </Col>
        <Col md="6" className="sec-tl-right">
          <Media className="sec-tl-image" src={props.imageSrc} alt="Right Image" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default SectionTextLeft;
