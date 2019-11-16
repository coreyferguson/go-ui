import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../auth/SignIn';
import OAuthCallback from '../auth/OAuthCallback';
import React from 'react';
import sessionService from '../auth/sessionService';
import UrlListing from '../urls/UrlListing';

export default function AppRouter() {
  const Root = !sessionService.isUserSignedIn() ? SignIn : UrlListing;
  return (
    <Router>
      <Route path='/' exact component={Root} />
      <Route path='/oauth/callback' exact component={OAuthCallback} />
    </Router>
  );
}