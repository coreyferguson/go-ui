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
    margin: 20px 0 20px 0;
    height: 50px;
    padding: 0 20px 0 20px;
    display: flex;
  }

  > nav > * {
    flex-grow: 1;
  }

  > nav > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row-reverse nowrap;
    align-items: center;

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
    padding-left: 60px;
  }
`;