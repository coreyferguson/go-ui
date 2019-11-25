import React, { useEffect } from 'react';
import sessionService from '../sessionService';
import SimpleMessagePageContainer from '../../pageContainers/SimpleMessagePageContainer';

export default function SignInView() {
  useEffect(() => {
    sessionService.signin().then(() => clientService.navigate('/'));
  });
  return (
    <SimpleMessagePageContainer><h1>loading</h1></SimpleMessagePageContainer>
  );
}