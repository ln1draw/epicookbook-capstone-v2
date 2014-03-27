var epicookbook = angular.module('epicookbook', []);

epicookbook.controller('ComponentsController', function($scope){
  $scope.components = [
    {'name': 'corn'},
    {'name': 'wheat'},
    {'name': 'high fructose corn syrup'},
    {'name': 'banana'}
  ];
})