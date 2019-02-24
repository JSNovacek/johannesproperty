import React from 'react';
import { Container, Row, Col, Button, Media } from 'reactstrap';

const SectionTextRight = props => (
  <div className={`SectionTextRight ${props.customClass}`} style={{ backgroundColor: `${props.bgColor}` }}>
    <Container className="sec-rt-wrapper">
      <Row>
        <Col md="6" className="sec-rt-left">
          <Media className="sec-rt-image" src={props.imageSrc} alt="Left Image" />
        </Col>
        <Col md="6" className="sec-rt-right">
          <div className="sec-rt-header exo" style={{ color: `${props.headerColor}` }}>{props.header}</div>
          <div className="sec-rt-content">
            {props.content}
            {props.contentSecondary &&
              <React.Fragment>
                <br /><br />
                {props.contentSecondary}
              </React.Fragment>
            }
          </div>
          {props.btnText &&
            <Button
              className="sec-rt-btn"
              size="md"
              color="secondary"
              outline
              onClick={props.onClick}
            >
              {props.btnText}
            </Button>
          }
        </Col>
      </Row>
    </Container>
  </div>
);

export default SectionTextRight;
