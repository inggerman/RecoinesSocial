'use strict';

angular.module('myApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
    templateUrl: '/partials/post/post.html',
    controller: 'PostCtrl'
  });
}])

.controller('PostCtrl', ['$scope',function($scope) {

	io.socket.get('/post',function(data){
         $scope.posts=data;
         $scope.$apply();
      });

   io.socket.on('posts',function(event){
      switch(event.verb){
         case 'created':
            $scope.posts.push(event.data);
            
            $scope.$apply();
            break;
         }
   });
}]);