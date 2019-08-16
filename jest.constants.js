let env = 'test';
process.argv.forEach((param) => {
  if (param.indexOf('--env') !== -1) {
    env = param.split('=')[1];
  }
});

const variables = {
  test: {
    __TEST_URL__: 'https://www.google.com.tw/?hl=en',
  },
  stage: {

  },
  prod: {

  },
};

const envVariables = variables[env] || variables.test;

module.exports = {
  ...envVariables,
};
