/**
 * ComentarioPostController
 *
 * @description :: Server-side logic for managing comentarioposts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	subfriendcomentarios:function(req,res){


		var username=req.param('username');
		var ncontrol=req.param('ncontrol');
		console.log("hola "+username);

		Users.findOne({username:username}).populate('idamigo').exec(function(err,user){


			console.log("este es-----------------------");
			console.log(user.idamigo)

			Posts.find({or:[{iduser2:user.ncontrol},{username:user.username}]}).exec(function(err,rp){
				console.log(rp.post+"registradosv "+"rp.id");
				Posts.subscribe(req.socket,rp);
				_.each(user.idamigo,function(amigouser){
				console.log("estees"+amigouser.username);	
				Posts.findOne({username:amigouser.username}).exec(function(err,posts){
					console.log(amigouser.username+"---"+posts.post);
					console.log("registrados "+"");
					Posts.subscribe(req.socket,posts);
					//console.log(posts.subscribers(posts).length);

				});
			});
			

			});
			
			
		});


	},

	crearcomentario:function(req,res){

		var comentario=req.param('comentario');
		var username=req.param('username');
		var iduser=req.param('iduser');
		var idpost=req.param('idpost');
		var nombre=req.param('nombre');
		var apellido=req.param('apellido');

		var datos=req.param.all;

		console.log(comentario+username+iduser+idpost+nombre+apellido);
		ComentariosPosts.create({comentario:comentario,username:username,iduser:iduser,idpost:idpost,nombre:nombre,apellido:apellido}).exec(function(err,comcre){
			console.log(comcre.id);
			ComentariosPosts.findOne(comcre.id).exec(function(err,pub){
				// console.log(pub);
				// pub.idroom.add(idroom);
				// pub.save(function(err,d){
				// 	console.log(err+"----"+d);
				// });
				console.log(comcre);
			Posts.publishAdd(idpost,'idcomentario',pub);
			});
			

		});
	},
	eliminarcoment:function(req,res){

		var id=req.param('id');
		var idpost=req.param('idpost');
		console.log("se entro a eliminarcoment"+id);
		console.log(idpost);
		

		if(req.isSocket && id){
			ComentariosPosts.findOne({id:id}).exec(function(err,coment){
				if(err) return res.negotiate(err);

				ComentariosPosts.destroy({id:id}).exec(function(err){

					if(err) return res.negotiate(err);
					console.log("se elimino"+coment.id);
					Posts.publishRemove(idpost,'idcomentario',coment.id);
					return res.send({idpost:coment});
				});
			});
			
		}

	}
	
};

