/**
 * GruposController
 *
 * @description :: Server-side logic for managing grupos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	findGrupo:function(req,res){

		var ncontrol=req.param('ncontrol');
		if(ncontrol){
			Users.findOne({ncontrol:ncontrol}).populate('idGroupMiembro').exec(function(err,grupo){

				if(err) return res.negotiate(err);

				if(!grupo){
					return res.notFound();
				}
				 console.log(grupo.ncontrol);

				return res.send(grupo);
			
			});
		}
	}
	
};

