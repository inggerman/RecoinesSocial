/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	findPost: function(req,res){

		Posts.find().populate('iduser').populate('iduser2').exec(function(err,post){

			if(err) return res.negotiate(err);

			if(!post){
				return res.notFound();
			}
			console.log('------------------______________________-----------------------')
			 console.log(post);
			  Posts.subscribe (req.socket, post);
        	  Posts.watch (req);

			return res.send(post);


		});

	},


	postadd: function(req,res){

		Posts.create({post:req.param('post'),iduser:req.param('iduser'),}).exec(function(err,post){

			if(err) return res.negotiate(err);

			 Posts.publishCreate (post);
             // res.json (post);
			return res.send(post);

		});
	}
	
};

