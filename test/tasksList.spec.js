describe('TasksController', function(){
  beforeEach(module('ToDoList'));

  var control;
  var task = {'task': 'Hello', 'completed': false}

  beforeEach(inject(function($controller){
    control = $controller('TasksController')
  }));

  it('initialises with an empty list', function(){
    expect(control.list).toBeUndefined();
    expect(control.submittedTask).toBeUndefined();
  });

  it('can store tasks', function(){
    control.allTasks.push(task);
    expect(control.allTasks[0].task).toEqual('Hello');
  });
});
