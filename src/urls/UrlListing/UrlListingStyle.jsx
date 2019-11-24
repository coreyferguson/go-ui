import React from 'react';
import styled from 'styled-components';
import { styles } from '../../theme/Theme.jsx';

const UrlListingStyle = styled.div`
  .create-url {
    display: flex;
    @media screen and (min-width: 800px) {
      flex-flow: row nowrap;
      > .vanity {
        max-width: 10em;
      }
      > .url {
        flex-grow: 1;
      }
    }
    @media screen and (max-width: 799px) {
      flex-flow: column nowrap;
      > * {
      }
    }
  }

  .zero-state {
    i.material-icons {
      font-size: ${styles.h1_spacious};
      margin-left: 300px;
    }
  }

  .url-listing {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-flow: row wrap;

    > li {
      border-radius: ${styles.border_radius};
      background-color: ${styles.background_2};
      padding: 1em;
      margin: 0.25em;
    }
  }
`;

export default UrlListingStyle;
