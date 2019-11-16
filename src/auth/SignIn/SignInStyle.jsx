import styled from 'styled-components';
import { styles } from '../../theme/Theme.jsx';

const SignInStyle = styled.div`
  text-align: center;
  background: url('https://go-dev-assets.growme.fyi/elephants_large.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 1170px) {
    background-position: top 25px center;
  }
  @media screen and (max-width: 1169px) {
    background-position: top 100px center;
  }

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

export default SignInStyle;