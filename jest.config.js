module.exports = {
  moduleNameMapper: {
    config: '<rootDir>/src/config/config-local.json',
    AWS: '<rootDir>/__mocks__/aws-sdk.js'
  },
  globals: {
    AWS: require('./__mocks__/aws-sdk')
  }
};