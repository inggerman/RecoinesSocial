/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {

	post: function(req,res){

		var username=req.param('username');


		if(req.user&&req.user[0].username==username){
			
			res.view('post',{
				username:username
			})
		}else
		if(req.user&&req.user[0].username!=username){
			res.view('postf',{
				username:username
			})
		}	
		
	},

	findPost: function(req,res){
		
		var username=req.param('username')
				
				Users.count().where({username:username}).exec(function(err,num){
						console.log("este usuario esta "+num+" veces");

					if(num>0){	

						Posts.find({username:username}).populate('iduser').populate('iduser2').exec(function(err,post){
							
							if(err) return res.negotiate(err);

							if(!post){
								return res.notFound();
							}
							console.log('------------------______________________-----------------------')
							console.log(post);
							Posts.subscribe (req.socket, post);
				        	Posts.watch (req.socket);

							return res.send(post);


						});
					}else{

						 return res.send({
						 	num:1,
						 	username:username
						 });
					}
				});
				
			console.log('no hay user logeado');
	},

	deletePost:function(req,res){

		var id=req.param('id');
		console.log(id);
		

		if(req.isSocket && id){
			Posts.findOne({id:id}).exec(function(err,post){
				if(err) return res.negotiate(err);

				Posts.destroy({id:id}).exec(function(err){

					if(err) return res.negotiate(err);
					console.log("se elimino"+post.id);
					Posts.publishDestroy(post.id);
				});
			});
			
		}
	},


	postadd: function(req,res){

		var post=req.param('post');
		
		var iduser=req.param('iduser');
		var username=req.param('username');

		console.log('este es lo que se recibe del cliente'+post,iduser,username);

		if(iduser && req.isSocket){

			Posts.create({post:post,iduser:iduser,username:username}).exec(function(err,post1){
				Posts.findOne({id:post1.id}).populate("iduser").exec(function(err,post){
					console.log(iduser+"es socket");

					if(err) return res.negotiate(err);
		
					console.log(post.id);

					Posts.publishCreate ({id:post.id,post:post.post,
						iduser:{ncontrol:post.iduser.ncontrol,nombre:post.iduser.nombre,
							apellido_p:post.iduser.apellido_p},createdAt:post.createdAt});

				});
				

			});	

			
			
		}else if(res.isSocket){
			Posts.watch(req);
			console.log('el post ha sido creado '+sails.sockets.id(req)+'es ahora subscrito al modello post')
			console.log('entro al segundo if');
		}else{
			console.log('no fue por un socket lastima');
		}
	
}
};

