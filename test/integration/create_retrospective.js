describe('create retrospective', function() {
  it('should display the new retro name and date', function() {
    browser.get('#/retrospectives');

    var name = element(by.model('newRetro.name'));
    name.sendKeys('Team Retro numero uno');

    var date = element(by.model('newRetro.date'));
    date.sendKeys('06/12/15 2:00pm');

    $('#new-retro-submit').click();

    var retroName = element(by.binding('retro.name'));
    expect(retroName.getText()).toEqual('Team Retro numero uno');

    var retroDate = element(by.binding('retro.date'));
    expect(retroDate.getText()).toEqual('06/12/15 2:00pm');

  });
});