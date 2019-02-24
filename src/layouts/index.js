import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

import NaviBar from '../components/NaviBar';
import Footer from '../components/Footer';
import '../../sass/style.scss';
import '../styles/_index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Johannes Property"
    />
    <NaviBar />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
