module.exports = {
  launch: {
    lgnoreHTTPSErros: true, // for testing in non-prod environments
    args: [
      '--no-sandbox', // if test runner is a docker process, require the arugment
    ],
    defaultViewPort: {
      width: 1920,
      height: 1080,
    },
  },
  browserContext: 'default',
};
