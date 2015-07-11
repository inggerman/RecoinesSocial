'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.post',
  'myApp.services'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
  // $locationProvider.hashPrefix('!');// esta funcion se ocupa para que se pueda indexar nuestra pagina en los navegadores

}]);