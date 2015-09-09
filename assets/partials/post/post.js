'use strict';

angular.module('myApp.post', [])
.controller('PostCtrl', ['$scope','$http','Authentication',function($scope,$http,Authentication) {
$scope.ncontrol2=Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
$scope.nombre=Authentication.fulluser ? Authentication.fulluser.nombre : 'hola mundo';
$scope.apellido_p=Authentication.fulluser ? Authentication.fulluser.apellido_p : 'hola mundo';
$scope.apellido_m=Authentication.fulluser ? Authentication.fulluser.apellido_m : 'hola mundo';
$scope.username=Authentication.fulluser ? Authentication.fulluser.username : 'hola mundo';
$scope.ncontrol=Authentication.fulluser ? Authentication.fulluser.ncontrol : 'hola mundo';
$scope.roomnombre=Authentication.room ? Authentication.room.nombre : 'hola mundo';
$scope.roomid=Authentication.room ? Authentication.room.id : 'hola mundo';
$scope.fullname=$scope.nombre+" "+$scope.apellido_p+" "+$scope.apellido_m;
$scope.carrera=Authentication.fulluser ? Authentication.fulluser.idcarrera.nombre_carrera : 'hola mundo';
$scope.semestre=Authentication.fulluser ? Authentication.fulluser.semestre : 'hola mundo';
$scope.frase=Authentication.fulluser ? Authentication.fulluser.frase.frase : 'hola mundo';
$scope.autor=Authentication.fulluser ? Authentication.fulluser.frase.autor : 'hola mundo';
$scope.rutaAvatar="images/fot/"+$scope.ncontrol+".jpg";
$scope.amigos=Authentication.fulluser ? Authentication.fulluser.idamigo: 'hola mundo';
console.log($scope.rutaAvatar);
$scope.posts=[];
$scope.indexpostlike="";

console.log($scope.username);
console.log($scope.nombre);
console.log($scope.frase);

 //var ncontrol= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
  console.log("este es el nombre de room "+$scope.roomnombre)


  BootstrapDialog.DEFAULT_TEXTS['OK'] = 'Sí';
  BootstrapDialog.DEFAULT_TEXTS['CANCEL'] = 'No';

  $scope.indexp="";
  $scope.indexp2="";
  $scope.indexpost="";
  $scope.indexc1="";
  $scope.indexc2="";
  $scope.indexppostcom1="";
  $scope.indexppostcom2="";


  


  io.socket.on('roompost',function(message){
    console.log(message);
    console.log(message.added);
    console.log(message.verb);
    switch(message.verb){



      case 'addedTo':
        console.log(message.added.username+""+$scope.username)

        
        if(message.added.username==$scope.username){

            //$scope.notificar($scope.tipo);
            $scope.postmio.push(message.added);
            $scope.$apply();

          }
        
            
            $scope.posts.push(message.added);
            $scope.$apply();
         
      
        break;
        case 'removedFrom':

        // console.log("el id del post eliminado es" + {id:message.removedId});
        // console.log("el id del post eliminado es" + $.param({id:message.removedId}));
        // console.log({id:message.removedId});

          
              console.log($scope.indexp+""+$scope.indexp2);
              $scope.posts.splice($scope.indexp2,1);
              $scope.postmio.splice($scope.indexp,1);
              $scope.$apply();
              console.log($scope.posts);
               console.log($scope.postmio);
              
              
          

        
        break;

    }
    
  });



  //llenar los Post cuando se inicie la Pagina

  io.socket.get('/getpost',{username:$scope.username,ncontrol:$scope.ncontrol},function(data){
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
// 
io.socket.get('/getpostme',{username:$scope.username,ncontrol:$scope.ncontrol},function(data){
      
          console.log(data);
          $scope.posts=data.user;
          $scope.$apply();
          
       
      //console.log($scope.postmio);
    });

io.socket.get('/getpostme',{username:$scope.username,ncontrol:$scope.ncontrol,mio:'yes'},function(data){
      
          console.log(data);
          
          $scope.postmio=data.user;
          $scope.$apply();
          
       
      //console.log($scope.postmio);
    });








      
    $scope.ver=false;
     $scope.vercomentarios=function($scope){
      
        
        if(!$scope.ver){
            $scope.ver=true;
        }else{
          $scope.ver=false;
        }

     }; 

    $scope.eliminarpost=function(idpost,index){
      //alert();
      
              $scope.indexp=$scope.postmio.indexOf(index);
              $scope.indexp2=$scope.posts.indexOf(index);


        
              
       
      
      console.log($scope.indexp+""+$scope.indexp2);
        console.log(idpost);
           BootstrapDialog.confirm('¿Estas Seguro que deseas eliminar esta publicacion?', function(result){
            if(result) {
                io.socket.delete('/deletepost/'+idpost,{idroom:$scope.roomid},function(resdata){

                  console.log(resdata.idpost);
                  $scope.dpost=resdata.idpost;
                  console.log($scope.dpost);
                  
                });
            }else {
                console.log("No se ha Eliminado Nada");
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

    $scope.datos2={};
    $scope.datos2.username=$scope.username;
    $scope.datos2.iduser=$scope.ncontrol;
    $scope.datos2.iduser2=$scope.ncontrol2;
    $scope.datos2.idroom=$scope.roomid;
    $scope.datos2.mio="no"; 
      $scope.postearamigo=function(){
        console.log("---------------------------------");
        console.log($scope.datos2);
        io.socket.get('/crearpostamigo',$scope.datos2,function(data){
        
        console.log(data);

      });
        $scope.datos2.post="";
      };

//////////////////Aqui empieza lo de Comentarios//////////////////////////////
///
///
///
///
///
io.socket.on('posts',function(message){
    console.log(message);
    console.log(message.added);
    console.log(message.verb);
    console.log($scope.posts);

    switch(message.verb){



      case 'addedTo':
        
        alert("entro"+ $scope.indexp);

        $scope.postmio[$scope.indexp].idcomentario.push(message.added);
        $scope.$apply();
        console.log($scope.posts);

         
      
        break;
        case 'removedFrom':

              
           console.log($scope.indexc1);
           console.log($scope.indexc2);
           console.log($scope.indexppostcom1);
           console.log($scope.indexppostcom2);
            if($scope.indexc1>=0 || $scope.indexc1!=""){
              alert("1");
              $scope.postmio[$scope.indexc1].idcomentario.splice($scope.indexppostcom1,1);
            }

            if($scope.indexc2>=0 || $scope.indexc2!=""){
              alert("2");
              $scope.posts[$scope.indexc2].idcomentario.splice($scope.indexppostcom2,1);
            }
              
              
              $scope.$apply();
              console.log($scope.posts.idcomentario);
               console.log($scope.postmio.idcomentario);

        
        break;

    }
    
  });

$scope.ncontrol1= Authentication.user ? Authentication.user.ncontrol : 'hola mundo';
   $scope.username1= Authentication.user ? Authentication.user.username : 'hola mundo'; 
   $scope.nombre1= Authentication.user ? Authentication.user.nombre : 'hola mundo';
   $scope.apellido1= Authentication.user ? Authentication.user.apellido_p : 'hola mundo'; 

      $scope.datoscoment={};
   $scope.comentar=function(idpost,indexc){
    console.log(idpost);
    console.log($scope.postmio.indexOf(indexc));
    $scope.indexp=$scope.postmio.indexOf(indexc);

       $scope.datoscoment.nombre=$scope.nombre1;
      $scope.datoscoment.apellido=$scope.apellido1;
      $scope.datoscoment.username=$scope.username1;
      $scope.datoscoment.idpost=idpost;
      $scope.datoscoment.iduser=$scope.ncontrol1;
        console.log($scope.datoscoment);
        io.socket.put('/crearcomentario',$scope.datoscoment,function(data){
        
        console.log(data);

      });
        $scope.datoscoment.comentario="";
      };


  $scope.eliminarcoment=function(idpost,indexc,indexp){

     
     console.log($scope.indexppostcom1=$scope.postmio.indexOf(indexp)); 
     console.log($scope.indexppostcom2=$scope.posts.indexOf(indexp)); 
     $scope.indexppostcom1=$scope.postmio.indexOf(indexp);
     $scope.indexppostcom2=$scope.posts.indexOf(indexp);
              
              
       console.log($scope.indexppostcom2);
      if($scope.indexppostcom1!=-1){
          $scope.indexc1=$scope.postmio[$scope.indexppostcom1].idcomentario.indexOf(indexc);
      }

      if($scope.indexppostcom2!=-1){
         $scope.indexc2=$scope.posts[$scope.indexppostcom2].idcomentario.indexOf(indexc);
      }
      
     

      console.log($scope.indexc1);
      console.log($scope.indexc2);



        
              
       
      
      console.log($scope.indexc1+""+$scope.indexc2);
        console.log(idpost);
           BootstrapDialog.confirm('¿Estas Seguro que deseas eliminar esta publicacion?', function(result){
            if(result) {
                io.socket.delete('/eliminarcoment/'+idpost,{idpost:idpost},function(resdata){

                  console.log(resdata.idpost);
                  $scope.dpost=resdata.idpost;
                  console.log($scope.dpost);
                  
                });
            }else {
                console.log("No se ha Eliminado Nada");
            }
        });
        
         
        

        
      
      }


    //   $scope.megusta=function(idpost,countlike,index){
    //     $scope.indexpostlike=index;
    //     var inclike=parseInt(countlike)+1;
    //     console.log(inclike);
    //     $http({
    //         method  : 'POST',
    //         url     : '/megusta',
    //         data    : {megusta:inclike}
    //        })
    //         .success(function(data) {

    //           /*console.log(Date.parse(data.agenda.recordatorio));
    //           data.agenda.recordatorio=Date.parse(data.agenda.recordatorio);*/
    //           console.log(data.megusta);
    //           $scope.post=data.megusta;
              
              

    //   }
    // }




}]);