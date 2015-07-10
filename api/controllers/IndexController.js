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
				res.view('inicio',{
			title:'hola',
			user:JSON.stringify(req.user)
		});
		}else{

			res.view('inicio',{
			title:'hola',
			user:JSON.stringify(req.user[0])
		});
		console.log('************************************');
		console.log(req.user[0]);
		console.log('************************************');

		}
		
		
	},
	hola:function(){

	}
	

};

