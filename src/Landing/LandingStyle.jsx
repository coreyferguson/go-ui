import styled from 'styled-components';
import config from 'appConfig';

const LandingStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;

  div > div > nav > ul > .logo {
    display: none;
  }

  > .container {
    display: flex;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 799px) {
      flex-flow: column nowrap;
      align-items: center;
    }
    @media screen and (min-width: 800px) {
      flex-flow: row nowrap;
      justify-content: center;
    }
  }

  > .container > .primary {
    display: inline-flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 50px 0 50px;
    @media screen and (min-width: 1000px) {
      width: 50%;
    }
  }

  > .container > .primary > .organization {
    display: flex;
    justify-content: center;

    @media screen and (max-width: 799px) {
      flex-flow: row nowrap;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    @media screen and (min-width: 800px) {
      flex-flow: row nowrap;
      padding-bottom: 50px;
    }

    > .logo {
      margin-right: 20px;
      @media screen and (max-width: 799px) {
        width: 60px;
        height: 60px;
        padding-top: 5px;
      }
    }
  }

  > .container > .primary > .login-container {
    text-align: center;
    > .login {
      @media screen and (max-width: 799px) {
        min-width: 100px;
        min-height: 40px;
      }
      @media screen and (min-width: 800px) {
        min-width: 150px;
        min-height: 50px;
      }
    }
  }

  > .container > .secondary {
    flex-grow: 1;
    background: url('${config.assets.domain}/hero_large.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media screen and (max-width: 799px) {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    @media screen and (min-width: 800px) {
      margin-top: 5%;
      margin-bottom: 5%;
      margin-right: 10%;
    }
  }
`;

export default LandingStyle;