'use strict';

var epicookbook = angular.module('epicookbook', [
  'ngRoute',
  'restangular',
  'epicookbookControllers',
  'UserApp'
]);

epicookbook.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/components', {
      templateUrl: 'partials/components.html',
      controller: 'ComponentsController'
    }).

    when('/login', {
      templateUrl: 'partials/user/login.html',
      public: true,
      login: true
    }).

    when('/signup', {
      templateUrl: 'partials/user/signup.html',
      public: true
    }).

    when('/profile', {
      templateUrl: 'partials/user/profile.html'
    }).

    when('/verify-email', {
      templateUrl: 'partials/user/verify-email.html',
      verify_email: true
    }).

    when('/reset-password', {
      templateUrl: 'partials/user/reset-password.html',
      public: true
    }).

    when('/set-password', {
      templateUrl: 'partials/user/set-password.html',
      set_password: true
    }).

    when('/recipe/new', {
      templateUrl: 'partials/recipe/new.html',
      controller: 'RecipeController'
    }).

    otherwise({
      templateUrl: 'partials/home-page.html'
    });
  }
])
.run(function($rootScope, user){
  user.init({ appId: '5339e04524d20' });
});