import React, { useEffect } from 'react';
import sessionService from '../sessionService';

export default function SignInView() {
  useEffect(() => {
    sessionService.signin().then(() => clientService.navigate('/'));
  });
  return <h1>loading</h1>;
}