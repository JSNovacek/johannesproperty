import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const SectionTextTop = props => (
  <div className={`SectionTextTop ${props.customClass}`} style={{ backgroundColor: `${props.bgColor}` }}>
    <Container className="sec-tt-wrapper">

      <Row className="sec-tt-header sec-header exo" style={{ color: `${props.headerColor}` }}>
        <Col md={{ size: `${props.width}`, offset: `${props.offset}` }}>
          {props.header}
          {props.underline &&
            <hr style={{ backgroundColor: `${props.underlineColor}` }} />
          }
        </Col>
      </Row>

      <Row className="sec-tt-bottom">
        <Col>
          <div className="sec-tt-content">
            {props.content}
          </div>
          {props.btnText &&
            <Button
              className="sec-tt-btn"
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

export default SectionTextTop;
