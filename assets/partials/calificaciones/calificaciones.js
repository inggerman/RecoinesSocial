'use strict';

angular.module('myApp.calificaciones', [])

.controller('CalCtrl', ['$scope','$http','Authentication','$timeout','ngDialog','ngAudio',function($scope,$http,Authentication,$timeout,ngDialog,ngAudio) {

	$scope.ncontrol=Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
	$scope.nombre=Authentication.user ? Authentication.user.nombre : 'hola mundo';
  	$scope.apellidop=Authentication.user ? Authentication.user.apellido_p : 'hola mundo';
	$scope.username=Authentication.user ? Authentication.user.username : 'hola mundo';
	$scope.fulluser=$scope.nombre+" "+$scope.apellidop;
	$scope.calificaciones=[];

	$http({
            method  : 'POST',
            url     : '/getcal',
            data    : {username:$scope.username,ncontrol:$scope.ncontrol}
           })
            .success(function(data) {

              
              console.log(data.cal);
              $scope.calificaciones=data.cal;
              
              
          });





}]);