/**
* DiasHorarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autoPK: false,
  attributes: {

  	clave_dia:{

  		type: 'string',
  		primaryKey:true,
  		
  		unique:true
  	},

  	lunes:{
  		type:'time'
  	},
  	martes:{
  		type:'time'
  	},
  	miercoles:{
  		type:'time'
  	},
  	jueves:{
  		type:'time'
  	},
  	viernes:{
  		type:'time'
  	},
  	sabado:{
  		type:'time'
  	}


  }
};

