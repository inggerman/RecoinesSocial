'use strict';

angular.module('myApp.agenda', [])

.controller('AgendaCtrl', ['$scope','$http','Authentication','$timeout','ngDialog','ngAudio',function($scope,$http,Authentication,$timeout,ngDialog,ngAudio) {
	
	$scope.notas=[];
	$scope.ncontrol=Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
	$scope.nombre=Authentication.user ? Authentication.user.nombre : 'hola mundo';
	$scope.username=Authentication.user ? Authentication.user.username : 'hola mundo';
	$scope.reloj="cargando";
	$scope.invervalo=100000000;
	$scope.agenda={};
	
	var t=new Date();
	$scope.fecha=new Date(t.getFullYear(),t.getMonth(),t.getDate());
	$scope.hora=new Date(0,0,0,t.getHours(),t.getMinutes());
	$scope.username="ghl";
	$scope.agenda.username="ghl";
	/*$scope.agenda.ncontrol=$scope.ncontrol;
	$scope.agenda.username=$scope.username;*/
	
	
///////////////////////////////////////
	$http({
            method  : 'POST',
            url     : '/getagenda',
            data    : {username:$scope.username}
           })
            .success(function(data) {

              /*console.log(Date.parse(data.agenda.recordatorio));
              data.agenda.recordatorio=Date.parse(data.agenda.recordatorio);*/
              console.log(data.agenda);
              $scope.notas=data.agenda;
              
              
          });

//////////////////////////////////////////////////////

	
	$scope.agendar=function(){
		

		$scope.fech=$scope.fecha.getFullYear()+"-"+($scope.fecha.getMonth()+1)+"-"
		+$scope.fecha.getDate()+" "+$scope.hora.getHours()
		+":"+$scope.hora.getMinutes();
		// console.log($scope.fech.toLocaleString());
		// console.log($scope.fech);
		
		$scope.agenda.recordatorio=$scope.fech;
		// console.log($scope.agenda.recordatorio);
		// console.log($.param($scope.agenda));
		 console.log($scope.agenda);

         $http({
            method  : 'POST',
            url     : '/putagenda',
            data    : $.param($scope.agenda), 
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
           })
            .success(function(data) {

              /*console.log(Date.parse(data.agenda.recordatorio));
              data.agenda.recordatorio=Date.parse(data.agenda.recordatorio);*/
              //console.log(data.agenda);
              if($scope.notas.push(data.agenda)){

              		$scope.agenda.titulo="";
              		
              }
              
          });
    }

    $scope.eliminaragenda=function(id){
    		$scope.id={
    			id:id,
    			username:$scope.username
    		};

    		console.log($scope.id);

    	$http({
            method  : 'DELETE',
            url     : '/deleteagenda',
            data    : $.param($scope.id), 
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
           })
            .success(function(data) {
              /*console.log(Date.parse(data.agenda.recordatorio));
              data.agenda.recordatorio=Date.parse(data.agenda.recordatorio);*/
              console.log(data);
              $scope.notas.splice(data.agenda,1);
              
              
          });
    }



	console.log($scope.reloj);
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
		
		$timeout(tick,60000);
	}

	tick();

}]);