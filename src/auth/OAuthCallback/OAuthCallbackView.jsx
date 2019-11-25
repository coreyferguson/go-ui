import React, { useEffect } from 'react';
import sessionService from '../sessionService';
import clientService from '../../clientService';
import SimpleMessagePageContainer from '../../pageContainers/SimpleMessagePageContainer';

export default function OAuthCallbackView() {
  useEffect(() => {
    sessionService.processCallback(clientService.getUrl()).then(() => {
      clientService.navigate('/');
    });
  });
  return (
    <SimpleMessagePageContainer><h1>loading</h1></SimpleMessagePageContainer>
  );
}