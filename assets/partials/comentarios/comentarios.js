'use strict';

angular.module('myApp.comentarios', [])

.controller('ComentariosCtrl', ['$scope','$http','Authentication','$timeout','ngDialog','ngAudio',function($scope,$http,Authentication,$timeout,ngDialog,ngAudio) {
   


   BootstrapDialog.DEFAULT_TEXTS['OK'] = 'Sí';
  BootstrapDialog.DEFAULT_TEXTS['CANCEL'] = 'No';
  

}]);