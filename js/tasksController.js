tasksList.controller('TasksController', [function() {

  var self = this;
  self.allTasks = [];

  self.addTasks = function(){
    if(self.submittedTask != undefined) {
      var newTask = {'task': self.submittedTask, 'completed': false};
      self.allTasks.push(newTask);
      self.submittedTask = '';
    }
  };

  self.calcAll = function() {
    var all = self.allTasks.length;
    return all;
  };

  self.deleteTask = function(index) {
    for(index=0; index < self.allTasks.length; index++) {
      if(self.allTasks[index].completed === true) {
         self.allTasks.splice(index, 1);
      } else { self.allTasks }
     }
   };
}]);