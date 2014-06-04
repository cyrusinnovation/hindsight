describe('angularjs homepage', function() {
  it('should have the app name', function() {
    browser.get('/');

    var appName = element(by.css('.header h3'));

    expect(appName.getText()).toEqual('hindsight');
  });
});