/**
 * PublicacionesController
 *
 * @description :: Server-side logic for managing publicaciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// buscarpost:function(req,res){
	// 	var iduser=req.param('id');
	// 	Usuarios.findOne(iduser).populate('idpost2').exec(function(err,userpost){
	// 		if(err){return res.negotiate(err);}

	// 		return res.send(userpost);
	// 	});
	// },
	// subpubuser:function(req,res){
	// 	var iduserpub=req.param('id');
	// 	console.log(iduserpub);

	// 	Publicaciones.findOne(1).exec(function(err,post){

	// 			Publicaciones.subscribe(req,post.id)

	// 	});

	// 	Usuarios.findOne(iduserpub).exec(function(err,usersub){
	// 		if(err){return res.negotiate(err);}
	// 		console.log(usersub.id);
	// 		Usuarios.subscribe(req,usersub.id)
	// 		return res.send(usersub);
	// 	});
	// },
	// usuariossub:function(req,res){
	// 	var id=req.param('id');
	// 	Usuarios.findOne(id).exec(function(err,user){
	// 		var subscribers=Usuarios.subscribers(user);

	// 		console.log("hay"+subscribers.length+" en"+id);
	// 		console.log(subscribers.room.id);

	// 			//var s=sails.sockets.subscribers('user');
			
	// 			//console.log(subscribers);
			
	// 		return res.send();
	// 	});
	// },
	// crearpub:function(req,res){
	// 	// var datos_cliente=req.params.all();
	// 	// console.log(datos_cliente);
	// 	// Usuarios.findOne(1).exec(function(err,post){
	// 	// 	if(err){return res.negotiate(err);}
	// 	// 	Publicaciones.publishAdd(post.id,'idpost2',post.iduser);
	// 	// 	return res.send(post);
	// 	// });
	// }
	// 
	subamigo:function(req,res){
		// var id=req.param('iduser');
		// Usuarios.findOne(id).populate('idamigo').exec(function(err,user){
		// 	if(err){return res.negotiate(err);}
		// 	console.log(user);
		// 	Usuarios.subscribe(req.socket,);
		// 	Usuarios.watch(req.socket);



		// });
		// 
		var id=req.param('iduser');
		console.log(id);

		var suma=5+parseInt(id);
		console.log(suma);

		return res.send({res:suma})

	}
	
};

