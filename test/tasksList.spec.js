describe('TasksController', function(){

  var control;
  var panel;

  beforeEach(module('ToDoList'));

  beforeEach(inject(function($controller){
    control = $controller('TasksController')
  }));



  it('initialises with an empty list', function(){
    expect(control.allTasks).toEqual([]);
  });

  it('tasks have "not completed" status when created', function(){
    control.submittedTask = "Buy apples";
    control.addTasks();
    expect(control.allTasks[0].completed).toEqual(false)
  });

  it('task status can be changed to "completed"', function(){
    control.submittedTask = "Buy apples";
    control.addTasks();
    control.allTasks[0].completed = true;
    expect(control.allTasks[0].completed).toEqual(true)
  });

   it('can store tasks', function(){
    control.submittedTask = "Buy apples";
    control.addTasks();
    expect(control.allTasks[0].task).toEqual('Buy apples');
  });

   it('can count all tasks', function(){
    control.submittedTask = "Buy apples";
    control.addTasks();
    control.submittedTask = "Buy bananas";
    control.addTasks();
    expect(control.allTasks.length).toEqual(2);
   });

   it('can delete completed tasks', function(){
    control.submittedTask = "Buy apples"
    control.addTasks();
    expect(control.allTasks.length).toEqual(1);
    control.allTasks[0].completed = true;
    control.deleteTask(0);
    expect(control.allTasks.length).toEqual(0);
   });
});
