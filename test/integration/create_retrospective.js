describe('create retrospective', function() {
  it('should display the new retro name and date', function() {
    browser.get('#/retrospectives');

    var name = element(by.model('newRetro.name'));
    name.sendKeys('Team Retro numero uno');

    var date = element(by.model('newRetro.date'));
    date.sendKeys('06/12/2015');

    $('#new-retro-submit').click();

//    var retro = element(by.binding('retro'));

    var retroName = element(by.binding('retro.name'));
    expect(retroName.getText()).toEqual('Team Retro numero uno');

    var retroDate = element(by.binding('retro.date'));
    expect(retroDate.getText()).toEqual('2015-06-12');

  });
});