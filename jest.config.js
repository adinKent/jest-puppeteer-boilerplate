const envVariables = require('./jest.constants');

module.exports = {
  globals: {
    ...envVariables,
  },
  preset: 'jest-puppeteer',
  roots: [
    '<rootDir>',
  ],
  modulePaths: [
    '<rootDir>',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  setupFiles: [
    '<rootDir>/jest.init.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.screenshot.js',
  ],
  testSequencer: './jest.sequencer',
};
