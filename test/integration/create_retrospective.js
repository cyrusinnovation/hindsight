describe('create retrospective', function() {
  it('should display the new retro label and start date', function() {
    browser.get('#/retrospectives');

    var name = element(by.model('newRetro.label'));
    name.sendKeys('Team Retro numero uno');

    var date = element(by.model('newRetro.start'));
    date.sendKeys('06/12/2015');

    // TODO: Fix this test by mocking the httpBackend or something..
//    $('#new-retro-submit').click();
//
//    var retroName = element(by.binding('retro.label'));
//    expect(retroName.getText()).toEqual('Team Retro numero uno');
//
//    var retroDate = element(by.binding('retro.start'));
//    expect(retroDate.getText()).toEqual('2015-06-12');

  });
});