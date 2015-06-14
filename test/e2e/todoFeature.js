describe('To Do List', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });


  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('can display tasks', function(){
    var enterTask = element(by.model('controller.submittedTask')).sendKeys("Buy apples")
    var pressButton = element(by.className('btn')).click()

    enterTask;
    pressButton;
    var items = element.all(by.repeater('task in controller.allTasks'));
    expect(items.get(0).getText()).toEqual("Buy apples Edit");
  });
});