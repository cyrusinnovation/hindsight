describe('create retrospective', function() {
  it('should save the new retro name', function() {
    browser.get('#/retrospectives');

    var name = element(by.model('newRetro.name'));
    name.sendKeys('Team Retro numero uno');

    var date = element(by.model('newRetro.date'));
    date.sendKeys('06/12/15');

    $('#new-retro-submit').click();

    var retroName = element(by.binding('retro.name'));
    expect(retroName.getText()).toEqual('Team Retro numero uno');

  });
});