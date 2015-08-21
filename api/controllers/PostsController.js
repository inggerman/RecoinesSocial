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


			Roompost.findOne({nombre:username}).exec(function(err,room){
					if(err){return res.negotiate(err)}

						console.log("--as-ds-adasd-as-d-asd-asd-a-d"+username);
					console.log(room);

					res.view('post',{
						username:username,
						room:room
					})
				});
			
			
		}else
		if(req.user&&req.user[0].username!=username){
			Roompost.findOne({nombre:username}).exec(function(err,room){
					if(err){return res.negotiate(err)}

						console.log("--as-ds-adasd-as-d-asd-asd-a-d"+username);
					console.log(room);

					res.view('post',{
						username:username,
						room:room
					})
				});
		}	
		
	},
	getpost:function(req,res){
		var username=req.param('username');
		console.log(username);
		var resul=[];
		var acu=0;
		Users.findOne({username:username}).populate('idamigo').exec(function(err,user){
			console.log(user.idamigo);
			_.each(user.idamigo,function(amigo){
					
					console.log(user.ncontrol+"----------"+amigo.id2);
					Posts.find({iduser:amigo.id2}).populate('idcomentario').populate('iduser').populate('iduser2').exec(function(err,pub){
						resul.push({publi:pub});
						
						if(acu==user.idamigo.length-1){
							console.log(resul);
							return res.send({data:resul});
						}
						acu++;
						
					});


			});

			
			
			//

		});
		
		

	},

	getpostme:function(req,res){
		var username=req.param('username');
		var ncontrol=req.param('ncontrol');

		Posts.find({username:username}).populate('idcomentario').populate('iduser').populate('iduser2').exec(function(err,user){
			if(err){return res.negotiate(err)}	

			return res.send({user:user});	
			
			//

		});
		
		

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
	
},
subfriend:function(req,res){


		var username=req.param('username');
		console.log("hola "+username);

		Users.findOne({username:username}).populate('idamigo').exec(function(err,user){


			console.log("este es-----------------------");
			console.log(user.idamigo)

			Roompost.findOne({nombre:user.username}).exec(function(err,rp){
				console.log(rp.nombre+"registrados");
				Roompost.subscribe(req.socket,rp);
				_.each(user.idamigo,function(amigouser){
				console.log("estees"+amigouser.username);	
				Roompost.findOne({nombre:amigouser.username}).exec(function(err,roompost){
					console.log(amigouser.username+"---"+roompost.nombre);
					console.log("registrados");
					Roompost.subscribe(req.socket,roompost);
					//console.log(Roompost.subscribers(roompost).length);

				});
			});
			

			});
			
			
		});


	},
	crearpost:function(req,res){

		var post=req.param('post');
		var username=req.param('username');
		var iduser=req.param('iduser');
		var idroom=req.param('idroom');

		console.log(post+username+iduser+idroom);
		Posts.create({post:post,username:username,iduser:iduser,idroom:idroom}).exec(function(err,pubcre){
			console.log(pubcre.id);
			Posts.findOne(pubcre.id).populate('idroom').populate('idcomentario').populate('iduser').populate('iduser2').exec(function(err,pub){
				// console.log(pub);
				// pub.idroom.add(idroom);
				// pub.save(function(err,d){
				// 	console.log(err+"----"+d);
				// });
				console.log(pubcre);
			Roompost.publishAdd(idroom,'idpost',pub);
			});
			

		});

		
	}
};

