/**
 * CalificacionesController
 *
 * @description :: Server-side logic for managing calificaciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	calificaciones:function(req,res){

		return res.view('calificaciones')
	},
	getcal:function(req,res){

		var ncontrol=req.param('ncontrol');

		Calificaciones.find({ncontrol:ncontrol}).exec(function(err,cal){

			if(err){return res.negotiate(err)}

			return res.send({cal:cal});	

		});


	}
	
};

