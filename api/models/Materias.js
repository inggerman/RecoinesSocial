/**
* Materia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
autoPK: false,
  attributes: {
  	clave_materia:{
  		type: 'string',
  		primaryKey:true,
  		
  		unique:true
  	},
  	nombre_materia:{
  		type:'String',
  		required:true
  	},
  	idCarrera:{
  		model:'Carreras'
  	}
  }
};

