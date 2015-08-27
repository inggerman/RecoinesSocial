/**
* DatosPersonales.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autoPK: false,
  attributes: {
  	ncontrol:{
  		type: 'string',
  		primaryKey:true,
  		
  		unique:true
  	},

  	edad:{
  		type:'string'
  	},
  	fecha_nacimiento:{
  		type:'date'
  	},
  	lugar_residencia:{
  		type:'string'
  	},
  	lugar_nacimiento:{
  		type:'string'
  	},
  	situacion_sentimental:{
  		type:'string'
  	},
  	sexo:{type:'string'},
  	escuela_primaria:{
  		type:'string'
  	},
  	escula_secundaria:{
  		type:'string'
  	},
  	escuela_preparatoria:{
  		type:'string'
  	},
  	iduser:{
  		model:'Users'
  	}


  }
};

