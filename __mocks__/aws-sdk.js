
const config = {
  credentials: {
    refreshPromise: async () => {},
  }
};

class S3 {
  listObjectsV2() {
    return {
      promise: async () => {}
    }
  }
}

class CognitoIdentityCredentials {
  constructor() {
    return config.credentials;
  }
}

const AWS = { CognitoIdentityCredentials, config, S3 };

module.exports = AWS;