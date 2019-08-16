// If you use custom setup files, you'll need to include expect-puppeteer yourself in order to use the matchers it provides.
import 'expect-puppeteer';
import path from 'path';
import mkdirp from 'mkdirp';

const screenshotsPath = path.resolve(__dirname, 'testReports/screenshots');

const toFilename = (s) => s.replace(/[^a-z0-9.-]+/gi, '_');

const takeScreenshot = (testName, pageInstance = page) => {
  mkdirp.sync(screenshotsPath);
  const filePath = path.join(
    screenshotsPath,
    toFilename(`${testName}.png`),
  );
  return pageInstance.screenshot({
    path: filePath,
  });
};

const registerScreenshotReporter = () => {
  /**
   * jasmine reporter does not support async.
   * So we store the screenshot promise and wait for it before each test
   */
  let screenshotPromise = Promise.resolve();
  beforeEach(() => screenshotPromise);
  afterAll(() => screenshotPromise);

  /**
   * Take a screenshot on Failed test.
   * Jest standard reporters run in a separate process so they don't have
   * access to the page instance. Using jasmine reporter allows us to
   * have access to the test result, test name and page instance at the same time.
   */
  jasmine.getEnv().addReporter({
    specDone: async (result) => {
      if (result.status === 'failed') {
        screenshotPromise = screenshotPromise
          .catch()
          .then(() => takeScreenshot(result.fullName));
      }
    },
  });
};

registerScreenshotReporter();
