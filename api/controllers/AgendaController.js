/**
 * AgendaController
 *
 * @description :: Server-side logic for managing agenda
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


agenda:function(req,res){

	return res.view('agenda',{hola:'bienvenido a agenta'})

},
getaviso:function(req,res){

		var time=new Date();
		var username

		Agenda.find().exec(function(err,agenda){

			res.send({
			datos:agenda,	
			fechafull:Date.now(),
			fecha:time.getDate(),
			mes:time.getMonth(),
			anio:time.getFullYear(),
			hora:time.getHours(),
			minutos:time.getMinutes()

		});

		});

		

},
getagenda:function(req,res){

	var username=req.param('username');
	console.log(username);
	Agenda.find({username:username}).exec(function(err,agenda){

		if(err){return res.negotiate(err);}

		return res.send({agenda:agenda});
	});

},

putagenda:function(req,res){

	var titulo=req.param('titulo');
	var descripcion=req.param('descripcion');
	var recordatorio=req.param('recordatorio');
	var username=req.param('username');
	//var ncontrol=req.param('ncontrol');
	var data=req.param.all;
	 console.log(username);

	Agenda.create({titulo:titulo,descripcion:descripcion,recordatorio:recordatorio}).exec(function(err,agenda){

		if(err){ return res.negotiate(err);}

		return res.send({agenda:agenda});
	});

	
},
deleteagenda:function(req,res){

	var id=req.param('id');
	var username=req.param('username');
	Agenda.findOne(id).exec(function(err,agenda){
		if(err){return res.negotiate(err);}
		if(agenda){
			Agenda.destroy({id:agenda.id}).exec(function(err,del){
			if(err){return res.negotiate(err)}

				return res.send({
					del:del,
					msj:'yes',
					agenda:agenda
				
				});	
			});
		}else{return res.send({msj:'no hay Registro en agenda con el id '+id})}

		


	});
	
}

	
};

