'use strict';

angular.module('myApp.notificaciones', [])

.controller('notificacionesCtrl', ['$scope','$http','Authentication','$timeout','ngDialog','ngAudio',function($scope,$http,Authentication,$timeout,ngDialog,ngAudio) {



	$scope.username=Authentication.user ? Authentication.user.username : 'hola mundo';
	$scope.ncontrol=Authentication.user ? Authentication.user.ncontrol : 'hola mundo';

	io.socket.on('roompost',function(message){
    console.log(message);
    console.log(message.added);
    $scope.tipo="post";
    switch(message.verb){

      case 'addedTo':
        console.log(message.added.username+""+$scope.username)

         if(message.added.mio=="no"){ 
            $scope.notificar($scope.tipo); 
            
          }
      
        break;

    }
    
  });
  
  $scope.datosnoti={};
  $scope.numnoti=0;
  $scope.notificar=function(tipo){
    $scope.datosnoti.notificacion="tienes un nuevo post";
    $scope.datosnoti.username=$scope.username;
    $scope.datosnoti.ncontrol=$scope.ncontrol;
    $scope.datosnoti.tipo=tipo;
    console.log($scope.datosnoti);


    $http({
            method  : 'POST',
            url     : '/notificar',
            data    : $scope.datosnoti
           })
            .success(function(data) {
                
                console.log(data.noti);
                console.log(data.num);
                $scope.numnoti=data.num;
              
          });
  }


}]);