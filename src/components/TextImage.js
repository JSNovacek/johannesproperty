import React from 'react';
import Link from 'gatsby-link';

const TextImage = props => (
  <Link
    className="TextImage"
    to={props.href}
    style={{ backgroundImage: `url(${props.imgSrc})`, height: `${props.height}`, width: `${props.width}` }}
  >
    <div className="image-overlay">
      <div className="text-image">{props.text}</div>
    </div>
  </Link>
);

export default TextImage;
