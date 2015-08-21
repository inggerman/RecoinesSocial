'use strict';

angular.module('myApp.post', [])
.controller('PostCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {

$scope.name=Authentication.user ? Authentication.user.nombre : 'hola mundo';
$scope.username=Authentication.user ? Authentication.user.username : 'hola mundo';
$scope.ncontrol=Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
$scope.roomnombre=Authentication.room ? Authentication.room.nombre : 'hola mundo';
$scope.roomid=Authentication.room ? Authentication.room.id : 'hola mundo';

$scope.posts=[];

 //var ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
  console.log("este es el nombre de room "+$scope.roomnombre)


  BootstrapDialog.DEFAULT_TEXTS['OK'] = 'Sí';
  BootstrapDialog.DEFAULT_TEXTS['CANCEL'] = 'No';

  io.socket.on('roompost',function(message){
    console.log(message);
    console.log(message.added);
    switch(message.verb){

      case 'addedTo':
        console.log(message.added.username+""+$scope.username)
        if(message.added.username==$scope.username){

            $scope.postmio.push(message.added);
            $scope.$apply();

          }
        $scope.posts.push(message.added);
        $scope.$apply();
      
        break;

    }
    
  });
  


  //llenar los Post cuando se inicie la Pagina

  io.socket.get('/getpost',{username:$scope.username},function(data){
      for(var i=0;i<data.data.length;i++){
        for(var j=0;j<data.data[i].publi.length;j++){
           //console.log(data.data[i].publi[j].username);
          $scope.posts.push(data.data[i].publi[j]);
          $scope.$apply();
          //console.log(data.data[i].publi[j]);
          
        }
      } 
      
      console.log($scope.posts);
      // console.log(data.data.length);
      // console.log(data.data.publi.length)
      //console.log(data.data[0].publi[0]);
    });
// $scope.postmio=[];
io.socket.get('/getpostme',{username:$scope.username},function(data){
      
          //console.log(data);
          $scope.postmio=data.user;
          $scope.$apply();
          
       
      //console.log($scope.postmio);
    });


      

    $scope.eliminarpost=function(idpost){
           BootstrapDialog.confirm('¿Estas Seguro que deseas eliminar esta publicacion?', function(result){
            if(result) {
                io.socket.delete('/deletepost/'+idpost,function(resdata){
                  console.log(resdata)
                });
            }else {
                //console.log("No se ha Eliminado Nada");
            }
        });
        
         
        

        
      
      }

    $scope.datos={};
    //$scope.datos.roomnombre=$scope.roomnombre;
    $scope.datos.username=$scope.username;
    $scope.datos.iduser=$scope.ncontrol;
    $scope.datos.iduser2="";
    $scope.datos.idroom=$scope.roomid;






      $scope.postear=function(){

        console.log($scope.datos);
        io.socket.get('/crearpost',$scope.datos,function(data){
        
        console.log(data);

      });
        $scope.datos.post="";
      };



}]);