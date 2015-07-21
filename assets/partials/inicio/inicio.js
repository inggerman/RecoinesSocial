'use strict';

angular.module('myApp.inicio', [])

.controller('InicioCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {


 $scope.ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';

  $scope.nombre= Authentication.user ? Authentication.user.nombre:'no nombre';

  $scope.username= Authentication.user ? Authentication.user.username:'no nombre';

  $scope.apellido_p= Authentication.user ? Authentication.user.apellido_p:'no apellido';
  
  $scope.ncontrolSubs=$scope.ncontrol.substr(0,4);

  $scope.urlImg="/images/fot/al/"+$scope.ncontrol.substr(0,4)+"/"+$scope.ncontrol+".jpg";

  console.log("hola como estas "+$scope.urlImg);


  io.socket.get('/grupos1',{ncontrol:$scope.ncontrol},function(data){
    console.log(data.ncontrol);
         $scope.grupos=data;
         console.log($scope.grupos.ncontrol);
         console.log("omg "+$scope.grupos.idGroupMiembro[0].usercreador);
         $scope.$apply();
      });


}]);