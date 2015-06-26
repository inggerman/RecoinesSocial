/**
* Agenda.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	nombre_actividad:{
  		type:'string'
  	},
  	descripcion:{
  		type:'text',
  		required:true
  	},
  	fecha_recordatorio:{
  		type:'datatime'
  	},
  	iduser:{
  		model:'Users'
  	}

  }
};

