/**
* Carrera.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  
  autoPK: false,
  attributes: {

  	clave_carrera:{
  		type: 'string',
  		primaryKey:true,
  		
  		unique:true
  	},
  	nombre_carrera:{
  		type:'string',
  		required:true,
  		unique:true
  	},
    clave_Materia:{
      collection:'Materias',
      via:'clave_carrera'
    },
  	ncontrol_Alumno:{
      collection:'Alumnos',
      via:'idCarrera'
    },
    ncontrol:{
      model:'Users'
    }
    	
  }
    
  
};

