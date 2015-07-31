'use strict';

angular.module('myApp.grupos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  
 

 
  $routeProvider
  .when("/grupos", {
    templateUrl:'/partials/grupos/grupos.html',
    controller: 'GruposCtrl'
  });
}])

.controller('GruposCtrl', ['$scope','$http','Authentication','$routeParams',function($scope,$http,Authentication,$routeParams) {

  $scope.ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';

  $scope.nombre= Authentication.user ? Authentication.user.nombre:'no nombre';

  $scope.apellido_p= Authentication.user ? Authentication.user.apellido_p:'no apellido';
  
  $scope.ncontrolSubs=$scope.ncontrol.substr(0,4);

  $scope.urlImg="/images/fot/al/"+$scope.ncontrol.substr(0,4)+"/"+$scope.ncontrol+".jpg";

  console.log("hola como estas "+$scope.urlImg);

  var self = this;
  self.username = $routeParams.username;


  // io.socket.get('/findUser',{username:self.username},function(data){
  //   console.log(data.ncontrol);
  //        $scope.users=data;
  //        console.log($scope.users.ncontrol);
  //        //console.log("omg "+$scope.users.idGroupMiembro[0].usercreador);
  //        $scope.$apply();
  //     });

}]);