/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {


	inicio: function(req,res){

		if(!req.user){
			console.log('no hay user registrado');
				res.view('index',{
			title:'hola',
			user:JSON.stringify(req.user)
		});
		}else{
			var username=req.user[0].username;
			console.log(username);
			Users.findOne({username:username}).populate('idGroupMember').exec(function(err,group){
				if(err) return res.negotiate(err);Roompost.findOne({nombre:username}).exec(function(err,room){
					if(err){return res.negotiate(err)}

						console.log("--as-ds-adasd-as-d-asd-asd-a-d"+username);
					console.log(room);

					return res.view('inicio',{
						username:username,
						room:room,
						user:JSON.stringify(req.user[0])
					})
				});


					
				

				
		console.log('************************************');
		console.log(req.user[0]);
		console.log(group);
		console.log('************************************');

			});

			

		}
		
		
	},
	hola:function(){

	},
	getreloj:function(req,res){

		return res.send({reloj:Date.now()});
	}
	

};

