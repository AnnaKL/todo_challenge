describe('To Do List', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });


  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('can add task', function(){
    var enterTask = element(by.model('controller.submittedTask')).sendKeys("Buy apples")
    var pressButton = element(by.className('btn')).click()
    var items = element.all(by.repeater('task in controller.allTasks'));
    enterTask;
    pressButton;
    expect(items.get(0).getText()).toEqual("Buy apples Edit");
  });

  it('can count all tasks', function(){
    var enterTask = element(by.model('controller.submittedTask')).sendKeys("Buy apples");
    var pressButton = element(by.className('btn')).click();
    var totalCount = element(by.id('total'));
    expect(totalCount.getText()).toEqual('Number of tasks: 1');
  });

  it('can display all tasks', function(){
    var displayAll = element(by.className("displayInf"));
    element(by.model('controller.submittedTask')).sendKeys("Buy apples");
    element(by.className('btn')).click()
    element(by.id('all')).click();
    expect(displayAll.getText()).toEqual("Buy apples");
  });

  it('can display active tasks', function(){
    var displayAll = element(by.className("displayInf"));
    element(by.model('controller.submittedTask')).sendKeys("Buy apples");
    element(by.className('btn')).click();
    element(by.className('completed')).click();
    element(by.model('controller.submittedTask')).sendKeys("Buy bananas");
    element(by.className('btn')).click();
    element(by.id('active')).click();
    expect(displayAll.getText()).toEqual("Buy bananas");
  });

  it('can display completed tasks', function(){
    var displayAll = element(by.className("displayInf"));
    element(by.model('controller.submittedTask')).sendKeys("Buy apples");
    element(by.className('btn')).click();
    element(by.className('completed')).click();
    element(by.model('controller.submittedTask')).sendKeys("Buy bananas");
    element(by.className('btn')).click();
    element(by.id('done')).click();
    expect(displayAll.getText()).toEqual("Buy apples");
  });

  it('can delete completed tasks', function(){
    var items = element.all(by.repeater('task in controller.allTasks'));
    var displayAll = element(by.className("displayInf"));
    element(by.model('controller.submittedTask')).sendKeys("Buy apples");
    element(by.className('btn')).click();
    element(by.className('completed')).click();
    element(by.model('controller.submittedTask')).sendKeys("Buy bananas");
    element(by.className('btn')).click();
    element(by.id('remove')).click();
    expect(items.get(0).getText()).toEqual("Buy bananas Edit");
  });
});