'use strict';

angular.module('myApp.su', [])
.controller('suCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {

console.log("ooo");
$scope.carreras={};

	$http({
            method  : 'POST',
            url     : '/getcarreras'
           })
            .success(function(data) {

              /*console.log(Date.parse(data.agenda.recordatorio));
              data.agenda.recordatorio=Date.parse(data.agenda.recordatorio);*/
              console.log(data);
              $scope.carreras=data.carreras;
              
              
          });

	

}]);