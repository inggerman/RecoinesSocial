'use strict';

angular.module('myApp.public', [])

.controller('PublicCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {

		$scope.postmio=[];
	io.socket.on('roompost',function(message){
		console.log(message);
		console.log(message.added.publicacion);
		switch(message.verb){

			case 'addedTo':
				console.log(message.added.username+""+$scope.datos.username)
				if(message.added.username==$scope.datos.username){

					 	$scope.postmio.push(message.added);
						$scope.$apply();

					}
				$scope.posts.push(message.added);
				$scope.$apply();
			
				break;

		}
		
	});
	
	

	$scope.posts=[];


	$scope.llenar=function(){
		io.socket.get('/getpost',{iduser:$scope.datos.iduser},function(data){
			for(var i=0;i<data.data.length;i++){
				for(var j=0;j<data.data[i].publi.length;j++){
					 console.log(data.data[i].publi[j].username);
					 
					$scope.posts.push(data.data[i].publi[j]);
					$scope.$apply();
					console.log(data.data[i].publi[j]);
					
				}
			}	
			
			console.log(data);
			// console.log(data.data.length);
			// console.log(data.data.publi.length)
			console.log(data.data[0].publi[0]);
		});
	}


	$scope.accion=function(){
		io.socket.get('/subfriend',$scope.datos,function(data){
			console.log($scope.datos.iduser);
			console.log(data);
		});
	};
	
	$scope.datos={};
	$scope.postear=function(){
		io.socket.get('/crearpost',$scope.datos,function(data){
		console.log($scope.iduser);
		console.log(data);
	});
	};

}]);