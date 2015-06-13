describe('TasksController', function(){
  beforeEach(module('ToDoList'));

  var control;

  beforeEach(inject(function($controller){
    control = $controller('TasksController')
  }));

  it('initialises with an empty list', function(){
    expect(control.allTasks).toEqual([]);
    expect(control.submittedTask).toBeUndefined();
  });
});

describe('TasksController', function(){
  beforeEach(module('ToDoList'));

  var control;
  var submittedTask = {'task': 'Hello', 'completed': false}

  beforeEach(inject(function($controller){
    control = $controller('TasksController')
  }));

  it('can store and display tasks', function(){
    control.allTasks.push(submittedTask);
    expect(control.allTasks[0].task).toEqual('Hello');
  });
});

