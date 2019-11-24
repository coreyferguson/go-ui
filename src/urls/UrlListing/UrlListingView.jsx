import React from 'react';
import Container from '../../pageContainers/DefaultPageContainer';
import urlService from '../urlService';
import config from 'appConfig';

export default function UrlListingView() {
  const [ urls, setUrls ] = React.useState();
  const [ refVanity, refUrl ] = [ React.useRef(), React.useRef() ];
  React.useEffect(() => { urlService.listUrls().then(setUrls) }, []);
  const onCreate = e => {
    e.preventDefault();
    const vanity = refVanity.current.value;
    if (!urls.items.includes(vanity))
    setUrls({
      ...urls,
      items: [ vanity, ...urls.items ]
    });
    const url = refUrl.current.value;
    urlService.saveUrl(vanity, url);
    copy(vanity);
    e.target.reset();
    refVanity.current.focus();
  };
  return (
    <Container>
      <div>
        {showUrlCreation(onCreate, refVanity, refUrl)}
        {showZeroState(urls) || showUrls(urls)}
      </div>
    </Container>
  );
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
  const lis = urls.items.map(vanity => <li key={vanity} onClick={() => copy(vanity)}>{vanity}</li>);
  return (
    <ul className='url-listing'>
      {lis}
    </ul>
  );
}

function copy(vanity) {
  navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
    if (result.state == 'granted' || result.state == 'prompt') {
      navigator.clipboard.writeText(`${config.urls.redirectDomain}/${vanity}`).then(() => {
        alert('vanity url copied to clipboard');
      });
    }
  });
};
