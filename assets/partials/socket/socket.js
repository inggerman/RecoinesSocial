'use strict';

angular.module('myApp.socket', [])
.controller('SocketCtr', ['$scope','$http','Authentication',function($scope,$http,Authentication) {

$scope.evento="";
io.socket.on('connect',function(data){
    console.log("conectado");
    $scope.evento="conectado";
    $scope.$apply();
    console.log( $scope.evento);

});



io.socket.on('disconnect',function(data){
   console.log("desconectado");
    $scope.evento="desconectado";
     $scope.$apply();
    console.log( $scope.evento);

    /*io.socket.on('post')*/

});
$scope.tecla=function(){
  io.socket.get('/subamigo',{iduser:$scope.iduser},function(data){
    console.log(data);
    $scope.resul=data.res;
    $scope.$apply();
  });

};

$scope.iduser="";




// $scope.iduser="";
// $scope.subamigos=function(){

//   io.socket.get('/subamigo',{iduser:$scope.iduser},function(data){
//     console.log(data);
//   });
// };

}]);