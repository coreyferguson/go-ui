import sessionService from '../auth/sessionService';
import config from 'config';

export class UrlService {
  constructor() {
    this._configureAwsPromise = undefined;
  }

  async listUrls(options) {
    options = options || {};
    await this._configureAws();
    const s3 = this._getS3();
    const list = await s3.listObjectsV2({
      Bucket: config.urls.s3Bucket,
      MaxKeys: 100,
      ContinuationToken: options.next
    }).promise();
    return {
      items: list.Contents
        .filter(item => item.Key !== 'index.html' && item.Key !== 'main.bundle.js')
        .map(item => item.Key),
      hasNext: list.IsTruncated,
      next: list.NextContinuationToken
    };
  }

  async getUrl(options) {
    options = options || {};
    const vanity = options.vanity;
    await this._configureAws();
    const s3 = this._getS3();
    const res = await s3.headObject({
      Bucket: config.urls.s3Bucket,
      Key: vanity,
    }).promise();
    return res.WebsiteRedirectLocation;
  }

  saveUrl(vanity, url) {
    return s3.putObject({
      Bucket: config.urls.s3Bucket,
      Key: vanity,
      WebsiteRedirectLocation: url
    }).promise();
  }

  async _configureAws() {
    if (this._configureAwsPromise) return this._configureAwsPromise;
    const session = sessionService.getSignInUserSession();
    const idToken = session.idToken.jwtToken;
    const region = 'us-west-2'; // TODO: dynamic region
    AWS.config.region = region;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: config.auth.identityPoolId,
      CustomRoleARN: `go-dev-ui-creator`, // TODO: dynamic stage
      Logins: {
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