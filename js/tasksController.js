tasksList.controller('TasksController', [function() {

  var self = this;
  self.allTasks = [];

  self.addTasks = function(){
    var newTask = {'task': self.submittedTask, 'completed': false};
    self.allTasks.push(newTask);
  };
}]);