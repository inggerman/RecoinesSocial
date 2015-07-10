/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {


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


				var nc=req.param('ncontrol')
				console.log('sdfsdfsdfsdfsdfdfsfddf'+req.param('ncontrol'));
				console.log('numero de control'+nc);
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
			console.log('no hay user logeado');
		}


	},


	postadd: function(req,res){
		var post1={};
		Posts.create({post:req.param('post'),iduser:req.param('iduser'),}).exec(function(err,post){
			
			Posts.find({iduser:req.param('iduser')}).populate('iduser').populate('iduser2').exec(function(err,post){
			if(err) return res.negotiate(err);

			 post1=post;
			  //Posts.watch (req.socket);
             // res.json (post);
			return res.send(post);
			});
			Posts.publishCreate (post);

		});
	}
	
};

