import sessionService from '../auth/sessionService';
import config from 'config';

export class UrlService {
  constructor(options) {
    options = options || {};
    this._sessionService = options.sessionService || sessionService;
    this._configureAwsPromise = undefined;
  }

  async listUrls() {
    try {
      await this._configureAws();
      const s3 = this._getS3();
      const data = await s3.listObjectsV2({ Bucket: config.urls.s3Bucket, MaxKeys: 2 }).promise();
      console.log('data:', data);

      // get vanity url
      const vanity = await s3.getObject({
        Bucket: config.urls.s3Bucket,
        Key: "vanity",
      }).promise();
      console.log('vanity:', vanity);

      // put new vanity url
      // const res = await s3.putObject({
      //   Bucket: config.urls.s3Bucket,
      //   Key: 'vanity',
      //   WebsiteRedirectLocation: 'https://google.com'
      // }).promise();
      // console.log('res:', res);

      // get application resources
      // access denied
      // const index = await s3.getObject({
      //   Bucket: config.urls.s3Bucket,
      //   Key: "index.html",
      // }).promise();
      // console.log('index:', index);
    } catch (err) {
      console.log('unknown error, ', err);
    }
  }

  async saveUrl(vanity, url) {
  }

  async _configureAws() {
    if (this._configureAwsPromise) return this._configureAwsPromise;
    const session = this._sessionService.getSignInUserSession();
    const idToken = session.idToken.jwtToken;
    const region = 'us-west-2';
    AWS.config.region = region;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId : config.auth.identityPoolId,
      Logins : {
        [`cognito-idp.${region}.amazonaws.com/${config.auth.userPool.id}`]: idToken
      }
    });
    this._configureAwsPromise = AWS.config.credentials.refreshPromise();
    return this._configureAwsPromise;
  }

  _getS3() {
    return new AWS.S3({
      apiVersion: '2006-03-01',
      region: 'us-west-2',
      params: { Bucket: config.urls.s3Bucket }
    });
  }
}

export default new UrlService();