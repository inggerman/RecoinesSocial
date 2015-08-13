'use strict';

angular.module('myApp.reloj', [])

.controller('relojCtrl', ['$scope','$http','Authentication','$timeout','ngDialog','ngAudio',function($scope,$http,Authentication,$timeout,ngDialog,ngAudio) {

$scope.clock="";
	
	var tick=function(){
		 io.socket.get('/getreloj',function(data){
		 
		 	$scope.clock=data.reloj;
		});
		
		$timeout(tick,1000);
	}

	tick();

}]);