import React from 'react';
import styled from 'styled-components';
import { styles } from '../../theme/Theme.jsx';
import config from 'config';

export default styled.div`
  > nav {
    width: 100%;
    color: ${styles.foreground_2};
    display: flex;
    align-items: center;

    @media screen and (max-width: 799px) {
      height: 50px;
    }
    @media screen and (min-width: 800px) {
      height: 70px;
    }

    ul {
      margin: 0;
      padding: 0;
      flex-grow: 1;
      list-style-type: none;
      display: flex;
      flex-direction: row-reverse;

      @media screen and (max-width: 799px) {
        margin-top: 5px;
        padding-right: 5px;
      }
      @media screen and (min-width: 800px) {
        margin-top: 10px;
        padding-right: 10px;
      }
    }

    a {
      color: ${styles.foreground_2};
      text-decoration: none;
    }

    ul > li > a {
      line-height: 40px;
      padding-left: 5px;
      padding-right: 5px;
      @media screen and (max-width: 799px) {
        padding-top: 5px;
        padding-bottom: 5px;
        margin-right: 5px;
      }
      @media screen and (min-width: 800px) {
        padding-top: 10px;
        padding-bottom: 10px;
        margin-right: 10px;
      }
    }

    ul > li > a:hover {
      background-color: ${styles.foreground_2};
      color: ${styles.background_1};
      border-radius: 10px 5px 10px 5px;
    }

    .logo {
      height: 70px;
      background-image: url('${config.assets.domain}/logo-small.png');
      background-repeat: no-repeat;
      display: flex;
      padding-top: 10px;
      align-items: center;
      @media screen and (max-width: 799px) {
        background-position: 5px;
        background-size: 30px;
        padding-left: 40px;
      }
      @media screen and (min-width: 800px) {
        background-position: 10px;
        background-size: 40px;
        padding-left: 55px;
      }
    }

  }
`;