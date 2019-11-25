import React, { useEffect } from 'react';
import sessionService from '../sessionService';
import SimpleMessagePageContainer from '../../pageContainers/SimpleMessagePageContainer';

export default function SignOutView() {
  useEffect(() => {
    sessionService.signout();
  });
  return (
    <SimpleMessagePageContainer><h1>loading</h1></SimpleMessagePageContainer>
  );
}