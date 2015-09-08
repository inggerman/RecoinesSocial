/**
 * NotificacionesController
 *
 * @description :: Server-side logic for managing notificaciones
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	notificar:function(req,res){

		var notificacion=req.param('notificacion');
		var username=req.param('username');
		var ncontrol=req.param('ncontrol');
		var tipo=req.param('tipo');
		
		Notificaciones.create({notificacion:notificacion,username:username,ncontrol:ncontrol,tipo:tipo}).exec(function(err,noti){

			Notificaciones.count({username:username}).exec(function(err,num){

				return res.send({
					noti:noti,
					num:num
				});				
			});

			
		});
	}
	
};

