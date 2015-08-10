/**
 * PublicController
 *
 * @description :: Server-side logic for managing publics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	public:function(req,res){
		return res.view('public',{bienvenida:'gracias por entrar al post'})
	},
	getpost:function(req,res){
		var iduser=req.param('iduser');
		var resul=[];
		var acu=0;
		Usuarios.findOne(iduser).populate('idamigo').exec(function(err,user){
			
			_.each(user.idamigo,function(amigo){
					
					console.log(user.idamigo+"----------"+amigo.id);
					Publicaciones.find({iduser:amigo.id}).exec(function(err,pub){
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
	subfriend:function(req,res){


		var iduser=req.param('iduser');
		console.log("hola "+iduser);

		Usuarios.findOne(iduser).populate('idamigo').exec(function(err,user){

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

		var publi=req.param('post');
		var username=req.param('username');
		var iduser=req.param('iduser');
		var idroom=req.param('idroom');

		console.log(publi+username+iduser+idroom);
		Publicaciones.create({publicacion:publi,username:username,iduser:iduser}).exec(function(err,pubcre){
			console.log(pubcre.id);
			Publicaciones.findOne(pubcre.id).populate('idroom').exec(function(err,pub){
				console.log(pub);
				pub.idroom.add(idroom);
				pub.save(function(err,d){
					console.log(err+"----"+d);
				});
			});
			console.log(pubcre);
			Roompost.publishAdd(idroom,'idpost',pubcre);

		});

		
	}
	
};

