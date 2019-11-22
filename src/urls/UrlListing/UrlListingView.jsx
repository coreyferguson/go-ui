import React, { useEffect } from 'react';
import Container from '../../pageContainers/DefaultPageContainer';
import urlService from '../urlService';

export default function UrlListingView() {
  useEffect(() => {
    const vanity = 'vanity';
    urlService.getUrl({ vanity }).then(url => {
      console.log('url:', url);
    });
  })
  return (
    <Container><h2>UrlListingView</h2></Container>
  );
}