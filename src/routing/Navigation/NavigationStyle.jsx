import React from 'react';
import styled from 'styled-components';
import { styles } from '../../theme/Theme.jsx';
import config from 'appConfig';

export default styled.div`

  a {
    color: ${styles.foreground_1};
    text-decoration: none;
    padding: 5px;
  }

  > nav {
    display: flex;

    @media screen and (max-width: 799px) {
      height: 40px;
      margin: 5px 0 15px 0;
      padding: 0 5px 0 5px;
    }
    @media screen and (min-width: 800px) {
      height: 50px;
      margin: 20px 0 20px 0;
      padding: 0 20px 0 20px;
    }
  }

  > nav > * {
    display: flex;
    align-items: center;
    margin-right:
  }

  > nav > *:not(:last-child) {
    margin-right: 20px;
  }

  > nav > ul {
    flex-grow: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;
    justify-content: flex-start;

    a:hover {
      color: ${styles.background_1};
      background-color: ${styles.foreground_2};
      border-radius: ${styles.border_radius};
    }
  }

  > nav > .logo {
    display: flex;
    align-items: center;
    background-image: url('${config.assets.domain}/logo_medium.jpg');
    background-repeat: no-repeat;

    @media screen and (max-width: 799px) {
      padding-left: 50px;
      background-size: 40px;
    }
    @media screen and (min-width: 800px) {
      padding-left: 60px;
    }
  }
`;