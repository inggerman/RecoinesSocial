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
				if(err) return res.negotiate(err);

				res.view('inicio',{
				title:'hola',
				user:JSON.stringify(req.user[0]),
				group:group
				});
		console.log('************************************');
		console.log(req.user[0]);
		console.log(group);
		console.log('************************************');

			});

			

		}
		
		
	},
	hola:function(){

	}
	

};

