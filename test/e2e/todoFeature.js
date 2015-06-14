describe('To Do List', function() {
  var enterTask = element(by.model('controller.submittedTask'));
  var pressButton = element(by.className('btn'));
  var items = element.all(by.repeater('task in controller.allTasks'));
  var displayAll = element(by.className("displayInf"));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('can add task', function(){
    enterTask.sendKeys("Buy apples");
    pressButton.click();
    expect(items.get(0).getText()).toEqual("Buy apples Edit");
  });

  it('can count all tasks', function(){
    enterTask.sendKeys("Buy apples");
    pressButton.click();
    var totalCount = element(by.id('total'));
    expect(totalCount.getText()).toEqual('Number of tasks: 1');
  });

  it('can display all tasks', function(){
    enterTask.sendKeys("Buy apples");
    pressButton.click();
    element(by.id('all')).click();
    expect(displayAll.getText()).toEqual("Buy apples");
  });

  it('can display active tasks', function(){
    enterTask.sendKeys("Buy apples");
    pressButton.click();
    element(by.className('completed')).click();
    enterTask.sendKeys("Buy bananas");
    pressButton.click();
    element(by.id('active')).click();
    expect(displayAll.getText()).toEqual("Buy bananas");
  });

  it('can display completed tasks', function(){
    enterTask.sendKeys("Buy apples");
    pressButton.click();
    element(by.className('completed')).click();
    enterTask.sendKeys("Buy bananas");
    pressButton.click();
    element(by.id('done')).click();
    expect(displayAll.getText()).toEqual("Buy apples");
  });

  it('can delete completed tasks', function(){
    enterTask.sendKeys("Buy apples");
    pressButton.click();
    element(by.className('completed')).click();
    enterTask.sendKeys("Buy bananas");
    pressButton.click();
    element(by.id('remove')).click();
    expect(items.get(0).getText()).toEqual("Buy bananas Edit");
  });

  it('allow task to be edited', function(){
    enterTask.sendKeys("buy apples");
    pressButton.click();
    element(by.className('editText')).click();
    element(by.model('$data')).sendKeys('Tomorrow ');
    element(by.className('editable-buttons')).all(by.tagName('button')).get(0).click();
    expect(items.get(0).getText()).toEqual("Tomorrow buy apples Edit");
  });
});