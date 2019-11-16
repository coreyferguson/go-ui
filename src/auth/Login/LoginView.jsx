import Button from '../../form/Button.jsx';
import clientService from '../../clientService';
import config from 'config';
import React from 'react';
import sessionService from '../sessionService';

const logoSrc = config.assets.domain + '/logo-small.png';

export default function LoginView() {
  return (
    <div className='outer'>
      <div className='inner'>
        <div className='organization'>
          <div className='logo-container'>
            <img className='logo' src={logoSrc} />
            <h1 className='org-abbreviation'>SCIL</h1>
          </div>
          <h2 className='org-name'>Social Compassion in Legislation</h2>
        </div>
        <div className='application'>
          <h2>url shortener</h2>
          <Button className='logIn' onClick={logIn}>log in</Button>
        </div>
      </div>
    </div>
  );
}

export function logIn() {
  console.log('logging in');
  sessionService.signin().then(() => clientService.navigate('/'));
}