import React from 'react';

const Button = props => (
  <a href={props.link} className={`Button ${props.className}`}>{props.text}</a>
);

export default Button;
