import styled from 'styled-components';
import styles from '@bit/overattribution.growme.styles';

const UrlListingStyle = styled.div`

  > .create-url {
    display: flex;

    @media (max-width: 799px) {
      flex-flow: column nowrap;
      > .button {
        @media (max-width: 799px) {
          display: flex;
          > button {
            flex-grow: 1;
          }
        }
      }
    }
    @media (min-width: 800px) {
      flex-flow: row nowrap;
      align-items: center;
      > .vanity {
        max-width: 10em;
      }
      > .url {
        flex-grow: 1;
      }
    }

    > * {
      @media (max-width: 799px) {
        margin: ${styles.sizes.padding_cozy};
        flex-grow: 1;
      }
      @media (min-width: 800px) {
        margin-left: ${styles.sizes.padding_spacious};
        &:last-child {
          margin-right: ${styles.sizes.padding_spacious};
        }
      }
    }
  }

  > .zero-state {
    @media (max-width: 799px) {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      i.material-icons {
        font-size: 10em;
      }
    }
    @media (min-width: 800px) {
      h1 {
        margin-left: ${styles.sizes.font_size_spacious};
      }
      i.material-icons {
        font-size: 5em;
        margin-left: 300px;
      }
    }
  }

  > .url-listing {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-flow: row wrap;

    @media (max-width: 799px) {
      margin: ${styles.sizes.padding_cozy};
    }
    @media (min-width: 800px) {
      margin: ${styles.sizes.padding_spacious};
    }

    > li button {
      background-color: ${styles.colors.background_1};
      height: 70px;
    }

    > li button:focus, > li button:hover {
        background-color: ${styles.colors.foreground};
        color: ${styles.colors.background};
    }
  }
`;

export default UrlListingStyle;
