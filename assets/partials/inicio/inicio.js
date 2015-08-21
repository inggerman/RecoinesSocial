'use strict';

angular.module('myApp.inicio', [])

.controller('InicioCtrl', ['$scope','$http','Authentication','$timeout','ngDialog','ngAudio',function($scope,$http,Authentication,$timeout,ngDialog,ngAudio) {
   $scope.ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
   $scope.username= Authentication.user ? Authentication.user.username : 'hola mundo'; 
  //console.log(ncontrol);
  // $scope.ncontrolSubs=$scope.ncontrol.substr(0,4);

  // $scope.urlImg="/images/fot/al/"+$scope.ncontrol.substr(0,4)+"/"+$scope.ncontrol+".jpg";

  // console.log("hola como estas "+$scope.urlImg);
  

 //  io.socket.get('/grupos1',{ncontrol:$scope.ncontrol},function(data){
 //    if(data){
 //      console.log(data.ncontrol);
 //         $scope.grupos=data;
 //         console.log($scope.grupos.ncontrol);
 //         console.log("omg "+$scope.grupos.idGroupMember[0].usercreador);
 //         $scope.$apply();
     
 //    }else{

 //      $scope.grupos="Ha habido un error"
 //    }
 // });
 
 	


 	io.socket.get('/subfriend',{username:$scope.username},function(data){
			console.log($scope.username);
			console.log(data);
		});

 	console.log($scope.username);
 	// Esta funcion compara cada minuto con la fecha del servidor
	// los horarios de los registros agendados para mandar un mensaje de que
	// se ha llegado la hora y fecha del recordatorio
	var tick=function(){
		 io.socket.get('/getaviso',{username:$scope.username},function(data){
		 	//optiene la fecha del servidor
		 	var fs=new Date(data.fechafull);
		 	$scope.datatime=new Date(fs.getFullYear(),
		 		fs.getMonth(),fs.getDate(),+fs.getHours(),fs.getMinutes()).toISOString();
		 	//Itera los datos recibidos del modelo 
			for(var i=0;i<data.datos.length;i++){
				console.log($scope.datatime+"--"+data.datos[i].recordatorio+".-----"+data.datos[i].titulo);

				if($scope.datatime==data.datos[i].recordatorio){
					console.log("ahuevo se pudo"+" "+$scope.datatime+"---"+data.datos[i].recordatorio);
					$scope.tit=data.datos[i].titulo;
					$scope.date=data.datos[i].recordatorio;

					$scope.des=data.datos[i].descripcion;
					 $scope.sound = ngAudio.load("../../sonidos/alarma.mp3");
					 $scope.sound.loop=3;
					 $scope.sound.play();

					  // returns NgAudioObject
					ngDialog.open({
					    template: 'agenda.html',
					    className: 'ngdialog-theme-plain',
					    scope: $scope
					});
									}
			}
			
		});
		
		$timeout(tick,6000);
	}

	tick();

}]);