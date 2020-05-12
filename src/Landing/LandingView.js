import Button from '@bit/overattribution.growme.button';
import clientService from '../clientService';
import config from 'appConfig';
import React from 'react';
import sessionService from '../auth/sessionService';
import TextAndHeroPage from '@bit/overattribution.growme.text-and-hero-page';

const logoSrc = config.assets.domain + '/logo_large.png';

export default function LandingView() {
  return (
    <TextAndHeroPage
      main={
        <React.Fragment>
          <h1>url shortener</h1>
          <Button style={{ paddingTop: '50px' }} onClick={logIn}>log in</Button>
        </React.Fragment>
      }
      imageSource={logoSrc}
      imageCaption={<a href="https://www.wayneformayor.com/">wayneformayor.com</a>}
    />
  );
}

export function logIn() {
  sessionService.signin().then(() => clientService.navigate('/'));
}