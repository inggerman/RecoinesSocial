'use strict';

angular.module('myApp.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  
 

 
  $routeProvider
  .when("/post", {
    templateUrl:'/partials/post/post.html',
    controller: 'PostCtrl'
  });
}])

.controller('PostCtrl', ['$scope','$http','Authentication','$routeParams',function($scope,$http,Authentication,$routeParams) {

$scope.name=Authentication.user ? Authentication.user.nombre : 'hola mundo';

 var ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
 var nombre= Authentication.user ? Authentication.user.nombre : 'hola mundo';
 // var self = this;
 //  self.message = "holamundo"

 //  console.log(self);
  // var s={

  //   ncontrol:ncontrol
  // }


  // console.log(s);
        
  //        $http({
  //           method  : 'POST',
  //           url     : '/post',
  //           data    : $.param(s),  // pass in data as strings
  //           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
  //          })
  //           .success(function(data) {
  //             console.log(data);
  //         });


     

    

  io.socket.get('/post',{ncontrol:ncontrol},function(data){
    console.log(data);
         $scope.posts=data;
         $scope.npost=$scope.posts.length;
         console.log($scope.npost);
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


    $scope.pt={};

      $scope.publicar=function(){
        $scope.pt.iduser=ncontrol;
         // $http({
         //    method  : 'POST',
         //    url     : '/postadd',
         //    data    : $.param($scope.pt),  // convierte los datos en parametros para que el servidor los pueda recibir
         //    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
         //   })
         //    .success(function(data) {
         //      console.log(data);
         //  });

      io.socket.post('/postadd',$scope.pt);

      console.log($scope.pt.post);
      $scope.pt.post="";

    }

}]);