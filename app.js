angular.module('todoApp', [])
  .controller('TodoController', function($scope) {
    $scope.mustDoItems = [
      { text: 'Item 1', done: false },
      { text: 'Item 2', done: false },
      // Add more items as needed
    ];

    $scope.shouldDoItems = [
      { text: 'Item 1', done: false },
      { text: 'Item 2', done: false },
      // Add more items as needed
    ];

    $scope.couldDoItems = [
      { text: 'Item 1', done: false },
      { text: 'Item 2', done: false },
      // Add more items as needed
    ];

    $scope.ifIHaveTimeItems = [
      { text: 'Item 1', done: false },
      { text: 'Item 2', done: false },
      // Add more items as needed
    ];

    $scope.addMustDoItem = function() {
      if ($scope.newMustDoItem) {
        $scope.mustDoItems.push({ text: $scope.newMustDoItem, done: false });
        $scope.newMustDoItem = '';
      }
    };

    $scope.addShouldDoItem = function() {
      if ($scope.newShouldDoItem) {
        $scope.shouldDoItems.push({ text: $scope.newShouldDoItem, done: false });
        $scope.newShouldDoItem = '';
      }
    };

    $scope.addCouldDoItem = function() {
      if ($scope.newCouldDoItem) {
        $scope.couldDoItems.push({ text: $scope.newCouldDoItem, done: false });
        $scope.newCouldDoItem = '';
      }
    };

    $scope.addIfIHaveTimeItem = function() {
      if ($scope.newIfIHaveTimeItem) {
        $scope.ifIHaveTimeItems.push({ text: $scope.newIfIHaveTimeItem, done: false });
        $scope.newIfIHaveTimeItem = '';
      }
    };

    $scope.clearMarked = function() {
      $scope.mustDoItems = $scope.mustDoItems.filter(function(item) {
        return !item.done;
      });
      $scope.shouldDoItems = $scope.shouldDoItems.filter(function(item) {
        return !item.done;
      });
      $scope.couldDoItems = $scope.couldDoItems.filter(function(item) {
        return !item.done;
      });
      $scope.ifIHaveTimeItems = $scope.ifIHaveTimeItems.filter(function(item) {
        return !item.done;
      });
    };
  });