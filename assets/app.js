'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'angularMoment',
  'ngAnimate',
  'myApp.view1',
  'myApp.view2',
  'myApp.perfil',
  'myApp.post',
  'myApp.inicio',
  'myApp.services'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  
$routeProvider
  .when("/", {
    templateUrl:'/partials/inicio/inicio.html',
    controller: 'PostCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
  // $locationProvider.hashPrefix('!');// esta funcion se ocupa para que se pueda indexar nuestra pagina en los navegadores
  // $locationProvider.html5Mode(true);
  
}]);