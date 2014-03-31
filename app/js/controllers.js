var epicookbookControllers = angular.module('epicookbookControllers', []);

epicookbookControllers.controller('ComponentsController', ['$scope', '$http',
  function($scope, $http){
    $http.get('components/components.json').success(function(data){
      $scope.components = data;
    });
  }]);

epicookbookControllers.controller('HomeController', ['$scope', '$http', 
  function($scope, $http){

  }]);