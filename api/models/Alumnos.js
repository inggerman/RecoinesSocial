/**
* Alumno.js
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
  	password:{
  		type:'string',
  		
  		columnName: 'encrypted_password'
  	},
    nombre:{
      type:'string'
      
    },
    apellido_p:{
      type:'string'
    },
    apellido_m:{
      type:'string'
    },
    correo_inst:{
      type:'email',
      
      unique:true
    },
    idTutor:{
  		model:'Tutores'
  	},
  	idDocente:{
  		model:'Docentes'
  	},
  	idCarrera:{
  		model:'Carreras'
  	},
  	ncontrolUser:{
  		model:'Users'
  	},
  	ncontrolDocente:{
  		model:'Docentes'
  	}
	
  },
  beforeCreate:function(values,next){
  	hashPass(values,next);
  },
  beforeUpdate: function(values, next) {
		if(values.password) hashPassword(values, next);
		else next();
	}
};

var bcrypt=require('bcrypt');// un modulo de node para encriptar las contraseñas en un hash

//funcion que encripta la contraseña de la tabla User
function hashPass(values,next){
	bcrypt.hash(values.password,10,function(err,hash){
		if(err) return next(err);
		values.password=hash;
		next();
	});
}