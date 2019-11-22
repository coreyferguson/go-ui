import service from './urlService';
import AWS from 'aws-sdk';

jest.mock('../auth/sessionService');

describe('urlService', () => {

  afterEach(() => {
    jest.resetAllMocks();
    delete service._configureAwsPromise;
    AWS.reset();
  });

  test('_configureAws - successfully configured', () => {
    expect(service._configureAwsPromise).toBeUndefined();
    const refreshPromiseRes = Promise.resolve();
    jest.spyOn(AWS.config.credentials, 'refreshPromise').mockImplementation(() => refreshPromiseRes);
    const res = service._configureAws();
    expect(res).toEqual(refreshPromiseRes);
    expect(service._configureAwsPromise).toEqual(refreshPromiseRes);
  });

  test('_configureAws - reuses existing promise if previously configured', async () => {
    expect(service._configureAwsPromise).toBeUndefined();
    let counter = 0;
    jest
      .spyOn(AWS.config.credentials, 'refreshPromise')
      .mockImplementation(() => new Promise(resolve => resolve(counter++)));
    const res1 = await service._configureAws();
    const res2 = await service._configureAws();
    expect(res1).toEqual(res2);
  });

  test('listUrls - exclude default web assets', async () => {
    const s3 = newS3Mock({
      listObjectsV2: () => ({
        "IsTruncated": false,
        "Contents": [
            {
                "Key": "index.html",
                "LastModified": "2019-11-20T00:17:49.000Z",
                "ETag": "\"34293459a9a527caa9c3bad72503cd84\"",
                "Size": 1007,
                "StorageClass": "STANDARD"
            },
            {
                "Key": "main.bundle.js",
                "LastModified": "2019-11-20T00:17:49.000Z",
                "ETag": "\"e9f3488f88d945e3685732d0cadac55b\"",
                "Size": 96324,
                "StorageClass": "STANDARD"
            },
            {
                "Key": "vanity",
                "LastModified": "2019-11-20T00:18:19.000Z",
                "ETag": "\"d41d8cd98f00b204e9800998ecf8427e\"",
                "Size": 0,
                "StorageClass": "STANDARD"
            }
        ],
        "Name": "growme-go-dev-ui",
        "Prefix": "",
        "MaxKeys": 500,
        "CommonPrefixes": [],
        "KeyCount": 3
      })
    });
    jest.spyOn(AWS, 'S3').mockImplementation(() => s3);
    const urls = await service.listUrls();
    expect(urls.items).toHaveLength(1);
    expect(urls.items).toEqual([ 'vanity' ]);
  });

  test('listUrls - authorization denied', async () => {
    jest.spyOn(AWS.config.credentials, 'refreshPromise').mockImplementation(() => Promise.reject({
      "message": "... denied this request.",
      "code": "NotAuthorizedException",
      "time": "2019-11-22T00:37:30.492Z",
      "requestId": "6568118a-8a36-4ea9-9835-d9220a92aeca",
      "statusCode": 400,
      "retryable": false,
      "retryDelay": 20.977039859283874
    }));
    await expect(service.listUrls()).rejects.toHaveProperty('code', 'NotAuthorizedException');
  });

  test('listUrls - pagination', async () => {
    const s3 = newS3Mock({
      listObjectsV2: req => {
        if (!req || !req.ContinuationToken) return Promise.resolve({
          "IsTruncated": true,
          "Contents": [{ "Key": "one" }],
          "MaxKeys": 1,
          "KeyCount": 1,
          "NextContinuationToken": "pageTwo"
        });
        else return Promise.resolve({
          "IsTruncated": false,
          "Contents": [{ "Key": "two" }],
          "MaxKeys": 1,
          "KeyCount": 1
        });
      }
    });
    jest.spyOn(AWS, 'S3').mockImplementation(() => s3);
    const page1 = await service.listUrls();
    expect(page1).toHaveProperty('hasNext', true);
    expect(page1.items).toEqual(['one']);
    const page2 = await service.listUrls({ next: page1.next });
    expect(page2).toHaveProperty('hasNext', false);
    expect(page2.items).toEqual(['two']);
  });

  test('getUrl - success', async () => {
    const s3 = newS3Mock({
      headObject: req => Promise.resolve({
        "LastModified": "2019-11-20T00:18:19.000Z",
        "ContentLength": 0,
        "CacheControl": "no-cache",
        "ContentType": "application/octet-stream; charset=UTF-8",
        "WebsiteRedirectLocation": "https://redirect-location.com",
        "Metadata": {}
      })
    });
    jest.spyOn(AWS, 'S3').mockImplementation(() => s3);
    const url = await service.getUrl();
    expect(url).toEqual('https://redirect-location.com');
  });

  test('getUrl - authorization denied', async () => {
    jest.spyOn(AWS.config.credentials, 'refreshPromise').mockImplementation(() => Promise.reject({
      "message": "... denied this request.",
      "code": "NotAuthorizedException",
      "time": "2019-11-22T00:37:30.492Z",
      "requestId": "6568118a-8a36-4ea9-9835-d9220a92aeca",
      "statusCode": 400,
      "retryable": false,
      "retryDelay": 20.977039859283874
    }));
    await expect(service.getUrl('vanity')).rejects.toHaveProperty('code', 'NotAuthorizedException');
  });
});

function newS3Mock(options) {
  options = options || {};
  return {
    listObjectsV2: req => ({
      promise: options.listObjectsV2 ? () => options.listObjectsV2(req): Promise.resolve()
    }),
    headObject: req => ({
      promise: options.headObject ? () => options.headObject(req) : Promise.resolve()
    })
  };
}