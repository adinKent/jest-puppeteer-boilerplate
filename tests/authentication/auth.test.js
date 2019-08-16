describe('Test Google search page', () => {
  const { __TEST_URL__ } = global;

  beforeAll(async () => {
    await page.goto(`${__TEST_URL__}`);
  });

  it('should render Google Search Page', async () => {
    await expect(page).toMatch('Google Search');
  });
});
