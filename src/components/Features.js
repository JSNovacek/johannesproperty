import React from 'react';

const Features = props => (
  <section className="Features" id="features">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="features-title">Features</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="features-list">
            {props.data.map(item =>
              (<li className="features-list-item" key={item.title}>
                {item.title}
              </li>),
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
