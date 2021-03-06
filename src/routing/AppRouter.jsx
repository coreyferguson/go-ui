import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from '../Landing';
import OAuthCallback from '../auth/OAuthCallback';
import React from 'react';
import sessionService from '../auth/sessionService';
import UrlListing from '../urls/UrlListing';
import SignOut from '../auth/SignOut';
import OAuthSignOut from '../auth/OAuthSignOut';
import SignIn from '../auth/SignIn';

export default function AppRouter() {
  const Root = !sessionService.isUserSignedIn() ? Landing : UrlListing;
  return (
    <Router>
      <Route path='/' exact component={Root} />
      <Route path='/oauth/callback' exact component={OAuthCallback} />
      <Route path='/oauth/signout' exact component={OAuthSignOut} />
      <Route path='/signin' exact component={SignIn} />
      <Route path='/signout' exact component={SignOut} />
    </Router>
  );
}