
# go-ui

Go is a serverless URL Shortener.

## Configuring go-ui for another domain

1. Register a domain with [Route53](https://console.aws.amazon.com/route53/home)

2. Request a public certificate with [Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1) for your domain
  - Domain Names:
    - `domain.com`
    - `*.domain.com`
  - DNS Validation
  - Back on the certificates screen, expand each domain and `Create record in Route53`.

3. Deploy [go-ui](https://github.com/coreyferguson/go-ui)
  - Change properties in `serverless.yml`
    - `service`: Give a unique name for your domain and this service, e.g. `corey-go-ui`
    - `custom.certificateArn`: Certificate from step 2.
    - `custom.domain`: Domain name registered at step 1, e.g. `corey.com`
  - Set these property values in `serverless-dev.yml` and `serverless-prod.yml`. We'll fill them out later after authentication services are deployed.
    - `userPoolId: empty`
    - `identityPoolId: empty`
  - Update domain references in `scripts/deploy.js`
  - Temporarily comment out `UserPoolGroupCreator` section. This will need to be re-enabled later after authentication services are deployed.
  - Update domain references in `src/index.html`
  - Update domain references in `src/config/config-local.json`
  - Update domain references in `src/config/config-dev.json`
  - Update domain references in `webpack.dev.js`
  - Temporarily create A-record in Route53 to point to dev ui environment.

4. Deploy [go-assets](https://github.com/coreyferguson/go-assets)
  - Change properties in `serverless.yml`
    - `service`: Give a unique name for your domain and this service, e.g. `corey-go-assets`
    - `custom.certificateArn`: Certificate from step 2.
    - `custom.domain`: Domain name registered at step 1, e.g. `corey.com`
  - Change properties in `serverless.dev.yml`
    - TODO. Is this necessary? I can parameterize domain right?
  - Replace images
  - Run `stage=dev npm run deploy` to test on development.
  - Update domain references in `scripts/deploy.js`

5. Deploy [growme-auth](https://github.com/coreyferguson/growme-auth)
  - Change properties in `serverless.yml`
    - `service`: Give a unique name for your domain and this service, e.g. `corey-auth`
    - `custom.oauthProvider.domain`: Domain name registered at step 1, e.g. `corey.com`
    - `custom.oauthProvider.certificateArn`: Certificate from step 2.
  - Update domain references in `build/impl/appClients/appClientsConfig.json.template`
  - Follow README.md instructions to save Google client id and secrets.

6. Undo temporary actions
  - Uncomment out `UserPoolGroupCreator` section in `go-ui/serverless.yml`.



TODO: Delete temporary A-record in Route 53.
TODO: Remove "flash" references from deployments that don't require it.
  TODO: Remove "flash" references from growme-auth/build/impl/cognitoIdentityPoolProvider.js


TODO: https://serverfault.com/questions/450940/why-s3-website-redirect-location-is-not-followed-by-cloudfront
  - CloudFront to point to s3 static website address