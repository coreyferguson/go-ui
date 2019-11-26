import Button from '../form/Button.jsx';
import clientService from '../clientService';
import config from 'appConfig';
import Navigation from '../routing/Navigation';
import React from 'react';
import sessionService from '../auth/sessionService';

const logoSrc = config.assets.domain + '/logo_large.jpg';

export default function LandingView() {
  return (
    <React.Fragment>
      <Navigation />

      <div className='container'>


        <section className='primary'>
          <div className='organization'>
            <img className='logo' src={logoSrc} />
            <h1 className='abbreviation'>growme.fyi</h1>
          </div>
          <div className='login-container'>
            <Button className='login' onClick={logIn}>log in</Button>
          </div>
        </section>

        <section className='secondary'>
        </section>

      </div>
    </React.Fragment>
  );
}

export function logIn() {
  sessionService.signin().then(() => clientService.navigate('/'));
}