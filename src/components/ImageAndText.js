import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

const ImageAndText = props => (
  <div className={`ImageAndText ${props.customClass}`} style={{ backgroundColor: `${props.bgColor}` }}>
    <Container className="imageText-wrapper">
      <Row className="d-flex flex-row align-items-center justify-content-between">
        {props.imageSide === 'right'
          ? <React.Fragment>
            <Col md="7">
              <div className="imageText-text-left-header exo" style={{ color: `${props.headerColor}` }}>{props.header}</div>
              <div className="imageText-text-left">{props.content}</div>
            </Col>
            <Col md="5">
              <Media className="imageText-image-right" src={props.imageSrc} alt="Right Image" />
            </Col>
          </React.Fragment>
          : <React.Fragment>
            <Col md="5">
              <Media className="imageText-image-left" src={props.imageSrc} alt="Left Image" />
            </Col>
            <Col md="7">
              <div className="imageText-text-right-header exo" style={{ color: `${props.headerColor}` }}>{props.header}</div>
              <div className="imageText-text-right">{props.content}</div>
            </Col>
          </React.Fragment>
        }
      </Row>
    </Container>
  </div>
);

export default ImageAndText;
