import styled from 'styled-components';
import './LoginGlobalStyles.scss';
import { styles } from '../../theme/Theme.jsx';

const LoginStyle = styled.div`
  text-align: center;

  .outer {
    display: inline-flex;
    background-color: ${styles.background_1};
    padding: 20px;
    border-radius: 10px 5px 10px 5px;
    opacity: 0.9;
  }

  .organization > * {
    margin: 5px 0 5px 0;
  }

  .application {
    margin-top: 30px;
    > * {
      margin: 10px 0 10px 0;
    }
  }

  .logo-container {

    @media screen and (min-width: 1650px) {
      margin-top: 60px;
    }

    @media screen and (max-width: 1649px and min-width: 1470px;) {
      margin-top: 20px;
    }

    @media screen and (max-width: 1170px) {
      background-position:
    }

    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;

    > * {
      margin: 0 5px 0 5px;
    }

    > .org-abbreviation {
      margin-top: 20px;
    }
  }

  .logIn {
    min-width: 100px;
  }
`;

export default LoginStyle;