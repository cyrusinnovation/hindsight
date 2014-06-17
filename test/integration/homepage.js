describe('homepage', function() {

  it('should display the app name', function() {
    browser.get('/');
    var appName = element(by.css('.header h1'));
    expect(appName.getText()).toEqual('hindsight');
  });

  it('should load and compile correct template', function() {
    element(by.linkText('Retrospectives')).click();
    var viewContent = element(by.css('[ng-view]')).getText();
    expect(viewContent).toMatch(/Retrospectives/);

    element(by.linkText('Home')).click();
    var content = element(by.css('[ng-view]')).getText();
    expect(content).toMatch(/Hindsight is 20\/20/);
  });
});