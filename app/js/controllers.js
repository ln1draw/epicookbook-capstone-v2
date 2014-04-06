var epicookbookControllers = angular.module('epicookbookControllers', []);
var mainAPI = 'http://localhost:3000';

// THIS IS NOT A FINAL METHOD. This is leftover from previous explorations
epicookbookControllers.controller('ComponentsController', ['$scope', '$http',
  function($scope, $http){
    $http.get('components/components.json').success(function(data){
      $scope.components = data;
    });
  }]);

epicookbookControllers.controller('HomeController', ['$scope', '$http',
  function($scope, $http){
  }]);

epicookbookControllers.controller('NewRecipeController', ['$scope', '$http',
  function($scope, $http, Restangular){
    $scope.recipe = {};
    $http.get(mainAPI + '/ingredients.json').success(function(data){
      $scope.ingredients = data;
    });
    $http.get(mainAPI + '/components.json').success(function(data){
      $scope.components = data;
    });
  }]);