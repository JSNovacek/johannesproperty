import React from 'react';

import Icon from './icons/Icon';
import PropManager from './icons/prop-manager.icon';
import Transparency from './icons/transparency.icon';
import Flexibility from './icons/flexibility.icon';
import ListingCreation from './icons/listing-creation.icon';
import GuestManagement from './icons/guest-management.icon';
import Cleaning from './icons/cleaning.icon';
import Styling from './icons/styling.icon';
import Maintenace from './icons/maintenance.icon';
import Insurance from './icons/insurance.icon';
import ListingSEO from './icons/listing-seo.icon';
import Online from './icons/online.icon';
import Pricing from './icons/pricing.icon';
import Appraisal from './icons/appraisal.icon';
import Inspections from './icons/inspections.icon';
import Setup from './icons/setup.icon';
import Launch from './icons/launch.icon';

const chooseIcon = (name) => {
  switch (name) {
    case 'prop-manager':
      return PropManager;
    case 'transparency':
      return Transparency;
    case 'flexibility':
      return Flexibility;
    case 'listing-creation':
      return ListingCreation;
    case 'guest-management':
      return GuestManagement;
    case 'cleaning':
      return Cleaning;
    case 'styling':
      return Styling;
    case 'maintenance':
      return Maintenace;
    case 'insurance':
      return Insurance;
    case 'listing-seo':
      return ListingSEO;
    case 'online':
      return Online;
    case 'pricing':
      return Pricing;
    case 'appraisal':
      return Appraisal;
    case 'inspections':
      return Inspections;
    case 'setup':
      return Setup;
    case 'launch':
      return Launch;
    default:
      return Online;
  }
};

const IconCard = props => (
  <div className="IconCard d-flex flex-column align-items-center">
    <div className="icon-diamond">
      <Icon className={props.icon} icon={chooseIcon(props.icon)} width={40} height={40} fill={'#fff'} />
    </div>
    <div className={`icon-name ${props.icon}`}>{props.iconTitle}</div>
    <hr />
    <div className="icon-text">{props.iconText}</div>
  </div>
);

export default IconCard;
