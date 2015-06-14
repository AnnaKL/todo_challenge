tasksList.controller('TasksController', [function() {

  var self = this;
  self.allTasks = [];

  self.addTasks = function(){
    if(self.submittedTask != undefined) {
      var newTask = {'task': self.submittedTask, 'completed': false};
      self.allTasks.push(newTask);
    }
  };

  self.calcAll = function() {
    var all = self.allTasks.length;
    return all;
  };

  self.deleteTask = function() {
   self.allTasks = _.filter(self.allTasks, function(task){
            return !task.completed;
    });
  };
}]);
