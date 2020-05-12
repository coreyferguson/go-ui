import React from 'react';
import NavigationLib from '@bit/overattribution.growme.navigation';
import { Link } from 'react-router-dom';
import config from 'appConfig';
import sessionService from '../auth/sessionService';

export default function Navigation(props) {
  const [ authenticated, setAuthenticated ] = React.useState(false);
  React.useEffect(() => {
    if (sessionService.isUserSignedIn()) setAuthenticated(true);
  });
  let link;
  if (authenticated) link = <Link to='/signout'>sign out</Link>;
  else link = <Link to='/signin'>sign in</Link>;
  return (
    <NavigationLib
      logo={<Link to='/'><img src={`${config.assets.domain}/logo_small.png`} />wayne4m.com</Link>}
      contextualLinks={[ link ]}
    />
  );
}