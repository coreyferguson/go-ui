import Button from '../../form/Button.jsx';
import config from 'appConfig';
import DefaultPageContainer from '../../pageContainers/DefaultPageContainer';
import React from 'react';
import SimpleMessagePageContainer from '../../pageContainers/SimpleMessagePageContainer';
import urlService from '../urlService';

export default function UrlListingView() {
  const [ urls, setUrls ] = React.useState({ items: [] });
  const [ refVanity, refUrl ] = [ React.useRef(), React.useRef() ];
  const [ isLoading, setLoading ] = React.useState(true);
  React.useEffect(() => { urlService.listUrls().then(urls => {
    setUrls(urls);
    setLoading(false);
  }) }, []);
  const onCreate = e => handleCreate({ e, refVanity, refUrl, urls, setUrls });
  if (isLoading) return <SimpleMessagePageContainer><h1>loading</h1></SimpleMessagePageContainer>
  return (
    <DefaultPageContainer>
      <div>
        {showUrlCreation(onCreate, refVanity, refUrl)}
        {showZeroState(urls) || showUrls(urls)}
      </div>
    </DefaultPageContainer>
  );
}

function handleCreate({ e, refVanity, refUrl, urls, setUrls }) {
  e.preventDefault();
  const vanity = refVanity.current.value;
  if (!urls.items.includes(vanity)) {
    setUrls({ ...urls, items: [ vanity, ...urls.items ] })
  }
  const url = refUrl.current.value;
  urlService.saveUrl(vanity, url);
  copy(vanity);
  e.target.reset();
  refVanity.current.focus();
}

function showUrlCreation(onCreate, refVanity, refUrl) {
  return (
    <form className='create-url' onSubmit={onCreate}>
      <input className='vanity' type='text' placeholder='vanity' ref={refVanity} />
      <input className='url' type='text' placeholder='url' ref={refUrl} />
      <button type='submit'>create</button>
    </form>
  );
}

function showZeroState(urls) {
  if (urls && urls.items && urls.items.length > 0) return;
  return (
    <div className='zero-state'>
      <i className='material-icons'>arrow_upward</i>
      <h1>create a new vanity url</h1>
    </div>
  );
}

function showUrls(urls) {
  if (!urls || !urls.items || urls.items.length === 0) return;
  const lis = urls.items.map(vanity => <li key={vanity}><Button onClick={() => copy(vanity)}>{vanity}</Button></li>);
  return (
    <ul className='url-listing'>
      {lis}
    </ul>
  );
}

function copy(vanity) {
  if (!navigator || !navigator.permissions || !navigator.permissions.query) return;
  const promise = navigator.permissions.query({ name: 'clipboard-write' })
  if (!promise) return;
  promise.then(result => {
    if (result.state == 'granted' || result.state == 'prompt') {
      navigator.clipboard.writeText(`${config.urls.redirectDomain}/${vanity}`).then(() => {
        alert('vanity url copied to clipboard');
      });
    }
  });
};
