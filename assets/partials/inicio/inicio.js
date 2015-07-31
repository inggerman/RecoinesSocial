'use strict';

angular.module('myApp.inicio', [])

.controller('InicioCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {
   $scope.ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
   $scope.username= Authentication.user ? Authentication.user.username : 'hola mundo'; 
  //console.log(ncontrol);
  // $scope.ncontrolSubs=$scope.ncontrol.substr(0,4);

  // $scope.urlImg="/images/fot/al/"+$scope.ncontrol.substr(0,4)+"/"+$scope.ncontrol+".jpg";

  // console.log("hola como estas "+$scope.urlImg);
  

  io.socket.get('/grupos1',{ncontrol:$scope.ncontrol},function(data){
    if(data){
      console.log(data.ncontrol);
         $scope.grupos=data;
         console.log($scope.grupos.ncontrol);
         console.log("omg "+$scope.grupos.idGroupMember[0].usercreador);
         $scope.$apply();
     
    }else{

      $scope.grupos="Ha habido un error"
    }
 });

}]);