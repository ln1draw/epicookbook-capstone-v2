var epicookbookControllers = angular.module('epicookbookControllers', []);

epicookbookControllers.controller('HomeController', ['$scope', 'Restangular',
  function($scope, Restangular){
    var getRecipes = Restangular.all('http://localhost:3000/recipes');
    getRecipes.getList().then(function(someRecipes){
      $scope.recipes = someRecipes;
    });
  }]);