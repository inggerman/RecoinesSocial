'use strict';

angular.module('myApp.post', [])
.controller('PostCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {

$scope.name=Authentication.user ? Authentication.user.nombre : 'hola mundo';

 //var ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
  

  $scope.valor=function(indice){

    alert(indice);
  
  }

  BootstrapDialog.DEFAULT_TEXTS['OK'] = 'Sí';
  BootstrapDialog.DEFAULT_TEXTS['CANCEL'] = 'No';

  // $scope.nombre= Authentication.user ? Authentication.user.nombre:'no nombre';

  // $scope.apellido_p= Authentication.user ? Authentication.user.apellido_p:'no apellido';
  
  // $scope.ncontrolSubs=ncontrol.substr(0,4);

  // $scope.urlImg="/images/fot/al/"+ncontrol.substr(0,4)+"/"+ncontrol+".jpg";

  // console.log("hola como estas "+$scope.urlImg);


  // var s={
  //   ncontrol:ncontrol
  // }


  // console.log(s);
        
  //        $http({
  //           method  : 'POST',
  //           url     : '/post',
  //           data    : $.param(s),  // pass in data as strings
  //           headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
  //          })
  //           .success(function(data) {
  //             console.log(data);
  //         });


  var username=document.getElementById('username').value;
     

//alert(username);
    

  io.socket.get('/post',{username:username},function(data){
    console.log(data);

      if(data.num==1){

        window.location.replace("/erruser");
      }else{
         $scope.posts=data;
         $scope.npost=$scope.posts.length;
         console.log($scope.npost);
         $scope.$apply();
       }
      });

    console.log("gggg"+$scope.npost);

   io.socket.on('posts',function(event){
      switch(event.verb){
         case 'created':
            console.log(event);
            $scope.posts.push(event.data);
            $scope.$apply();
            break;
          case 'destroyed':
            console.log("son los posts qeu hay"+$scope.posts.length);
            for(var i=0;i<$scope.posts.length;i++){
                
                console.log($scope.posts[i].id);
                if($scope.posts[i].id==event.id){
                    $scope.posts.splice(i,1);
                    $scope.$apply();
                }
              

            }
            
            break;  
         }
   });


      $scope.eliminarpost=function(idpost){
           BootstrapDialog.confirm('¿Estas Seguro que deseas eliminar esta publicacion?', function(result){
            if(result) {
                io.socket.delete('/deletepost/'+idpost,function(resdata){
                  console.log(resdata)
                });
            }else {
                console.log("No se ha Eliminado Nada");
            }
        });
        
         
        

        
      
      }

    $scope.pt={};

      $scope.publicar=function(ncontrol,username){

        console.log(ncontrol+""+username);
        $scope.pt.iduser=ncontrol;
        $scope.pt.username=username;
         // $http({
         //    method  : 'POST',
         //    url     : '/postadd',
         //    data    : $.param($scope.pt),  // convierte los datos en parametros para que el servidor los pueda recibir
         //    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
         //   })
         //    .success(function(data) {
         //      console.log(data);
         //  });

      io.socket.post('/postadd',$scope.pt);

      console.log($scope.pt.post);
      $scope.pt.post="";

    }


}]);