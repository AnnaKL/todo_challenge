tasksList.controller('NavigationController', [function() {
  var self = this;
  self.tab = 0;

  self.setTab = function(selectedTab) {
    self.tab = selectedTab;
  };

  self.isSet = function(number) {
    return self.tab === number;
  };
}]);