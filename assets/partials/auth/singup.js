'use strict';

angular.module('myApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/post', {
    templateUrl: '/partials/post/post.html',
    controller: 'PostCtrl'
  });
}])

.controller('PostCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {



}]);