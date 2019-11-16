import React, { useEffect } from 'react';
import sessionService from '../sessionService';

export default function SignOutView() {
  useEffect(() => sessionService.signout());
  return (
    <h1>SignOutView</h1>
  );
}