import React, { useEffect, useState } from 'react';
import Navigation from '@bit/overattribution.growme.navigation';
import config from 'appConfig';
import { Link } from 'react-router-dom';
import sessionService from '../auth/sessionService';
import PropTypes from 'prop-types';

export default function NavigationWrapper(props) {
  const [ authenticated, setAuthenticated ] = useState(false);
  useEffect(() => {
    if (sessionService.isUserSignedIn()) setAuthenticated(true);
  });
  const sessionLink = authenticated
    ? <Link to='/signout'>sign out</Link>
    : <Link to='/signin'>sign in</Link>;
  const logo = props.showLogo
    ? <Link to='/'><img src={`${config.assets.domain}/logo_medium.jpg`} />growme.fyi</Link>
    : undefined;
  const navigationProps = {
    logo,
    navigationLinks: [ <a href={config.flash.url}>flash</a> ],
    contextualLinks: [ sessionLink ],
  };
  return <Navigation {...navigationProps} />;
}

NavigationWrapper.propTypes = {
  showLogo: PropTypes.bool
};

NavigationWrapper.defaultProps = {
  showLogo: true
};