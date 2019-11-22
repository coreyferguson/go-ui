import React from 'react';
import Container from '../../pageContainers/DefaultPageContainer';
import urlService from '../urlService';

export default function UrlListingView() {
  const [ urls, setUrls ] = React.useState();
  React.useEffect(() => {
    urlService.listUrls().then(setUrls);
  }, []);
  const view = !urls || !urls.items || urls.items.length === 0
    ? showZeroState()
    : showUrls(urls);
  return (<Container>{view}</Container>);
}

function showZeroState() {
  return (
    <div className='zero-state'>
      <i className='material-icons'>arrow_upward</i>
      <h1>create a new vanity url</h1>
    </div>
  );
}

function showUrls(urls) {
  const lis = urls.items.map(vanity => <li key={vanity}>{vanity}</li>);
  return (
    <ul className='url-listing'>
      {lis}
    </ul>
  );
}