/**
* Calificaciones.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	materia:{
  		type:'string'
  	},

  	clave_materia:{
  		type:'string'
  	},
  	calificacion:{
  		type:'float'

  	},
  	Pa1:{type:'float'},
  	Pa2:{type:'float'},
  	Pa3:{type:'float'},
  	Pa4:{type:'float'},
  	Pa5:{type:'float'},
  	Pa6:{type:'float'},
  	Pa7:{type:'float'},
  	Pa8:{type:'float'},
  	Pa9:{type:'float'},
  	Pa10:{type:'float'},
  	op:{type:'string'},
  	ncontrol:{
  		model:'Users'
  	}
  }
};

