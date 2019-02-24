import React from 'react';

const Icon = props => (
  <svg className={props.className} viewBox={props.icon.viewBox} width={props.width} height={props.height} fill={props.fill}>
    <use xlinkHref={`#${props.icon.id}`} />
  </svg>
);

export default Icon;
