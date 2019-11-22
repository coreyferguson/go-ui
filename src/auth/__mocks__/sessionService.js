
export class SessionServiceMock {
  getCognitoAuth() {
    return {};
  }
  async processCallback() {}
  async signin() {}
  signout() {}
  isUserSignedIn() {
    return true;
  }
  getSignInUserSession() {
    return {
      idToken: {
        jwtToken: 'jwtTokenValue'
      }
    };
  }
}

const singleton = new SessionServiceMock();
export default singleton;