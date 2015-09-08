/**
 * CarreraController
 *
 * @description :: Server-side logic for managing carreras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getcarreras:function(req,res){

		Carreras.find().exec(function(err,carreras){

			return res.send({carreras:carreras});
		});
	}
	
};

