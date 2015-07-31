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
		if(req.user){
			console.log('++++++++++++++++++++++++++++++++++++++');
			console.log(req.user[0].ncontrol);
			console.log('++++++++++++++++++++++++++++++++++++++');
			 var nc=req.user[0].ncontrol;
			Posts.find({iduser:nc}).populate('iduser').populate('iduser2').exec(function(err,post){

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


				var username=req.param('username')
				console.log('sdfsdfsdfsdfsdfdfsfddf'+req.param('username'));
				console.log('numero de control'+username);
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
		}


	},

	deletePost:function(req,res){

		var id=req.param('id');
		Posts.destroy({id:id}).exec(function(err,post){

			if(err) return res.negotiate(err);

			return res.send(post);
		});
	},


	postadd: function(req,res){

		var post=req.param('post');
		var iduser=req.param('iduser');

		console.log('este es lo que se recibe del cliente'+post,iduser);

		if(iduser && req.isSocket){

				Posts.create({post:post,iduser:iduser}).exec(function(err,post){
				Posts.find({iduser:iduser}).exec(function(err,post1){
						if(err) return res.negotiate(err);
				console.log('entro al primer if');

				console.log("este es el user"+post1);
				console.log("este es el post"+post);
				Posts.publishCreate (post);
				return res.send({
					post:post,
					post1:post1
				});

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

