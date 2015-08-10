/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	//atento a nuevas instancias de usuario
	watchuser:function(req,res){
		Usuarios.find().exec(function(err,usuarios){
			 if(err){
			 	return res.negotiate(err);
			 }
			// _.each(usuarios,function(user){

			// 	sails.log("este es el usuario"+user)
			// });
			Usuarios.subscribe(req,_.pluck(usuarios,'id'),['create,update,destroy']);
			Usuarios.watch(req.socket);
			console.log('Usuario captado'+req.socket.id);

			return res.send(usuarios);

		});
		

	},

	subscribeuser:function(req,res){
		var id=req.param('id');
		// subscribe client to model changes 
    	Usuarios.subscribe(req.socket,id);
    	console.log( 'User subscribed to ' + req.socket.id+"el ide es"+id );

	},
	createpub:function(req,res){
		var datos_del_cliente=req.params.all();

		sails.log(datos_del_cliente);

		if(req.isSocket && req.method==='POST'){

			Usuarios.create(datos_del_cliente).then(function(datos){
				sails.log(datos);
				Usuarios.publishCreate(datos);

			}).catch(function(err){
				sails.log("erro creando nuevo usuario:"+ err)
				return res.serverError('el servido ha encontrado un pŕoblema')
			});

		}else{

			return res.badRequest("lo siento este punto es accesible via socket");
		}
	},

	usersocket:function(req,res){
		res.view('usersocket',{bienvenida:"Esto es una prueba de los sockets"});
	}


};

