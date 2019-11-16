import React, { useEffect } from 'react';
import sessionService from '../sessionService';
import clientService from '../../clientService';

export default function OAuthCallbackView() {
  useEffect(() => {
    sessionService.processCallback(clientService.getUrl()).then(() => {
      clientService.navigate('/');
    });
  });
  return (
    <h1>OAuthCallbackView</h1>
  );
}