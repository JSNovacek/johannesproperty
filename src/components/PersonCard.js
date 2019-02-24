import React from 'react';
import { Media } from 'reactstrap';

const PersonCard = props => (
  <div className="PersonCard d-flex flex-column align-items-start">
    <div>
      <Media className="person-image" src={props.imageSrc} alt="Person Image" />
    </div>
    <div className="person-name">{props.name}</div>
    <hr />
    <div className="person-title">{props.title}</div>
    <div className="person-text">{props.text}</div>
  </div>
);

export default PersonCard;
