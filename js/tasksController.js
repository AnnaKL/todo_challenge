tasksList.controller('TasksController', [function() {

  var self = this;
  self.allTasks = [];


  self.printTasks = function(){
    var newTask = {'task': self.submittedTask, 'completed': false};
    self.allTasks.push(newTask);
  };
}]);