import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sessionService from '../../auth/sessionService';
import config from 'appConfig';

export default function NavigationView() {
  const [ authenticated, setAuthenticated ] = useState(false);
  useEffect(() => {
    if (sessionService.isUserSignedIn()) setAuthenticated(true);
  });
  let links;
  if (authenticated) {
    links = <li><Link to='/signout'>sign out</Link></li>;
  } else {
    links = <li><Link to='/signin'>sign in</Link></li>;
  }
  return (
    <nav>
      <Link to='/' className='logo'>growme.fyi</Link>
      <a href={config.flash.url}>flash</a>
      <ul>
        {links}
      </ul>
    </nav>
  );
}
