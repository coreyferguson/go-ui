import React, { useEffect } from 'react';
import Container from '../../pageContainers/DefaultPageContainer';
import urlService from '../urlService';

export default function UrlListingView() {
  useEffect(() => {
    urlService.listUrls().then(urls => {
      console.log('urls:', urls);
    });
  })
  return (
    <Container><h2>UrlListingView</h2></Container>
  );
}