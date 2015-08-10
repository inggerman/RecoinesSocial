/**
* Amigos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	
  attributes: {
  	id2:{
      type:'string'
    },
  	name:{
      type:'string'
      
    },
    apellidoPaterno:{
      type:'string'
    },
    apellidoMaterno:{
      type:'string'
    },
    username:{
      type:'string'
    },
    iduser:{
    	model:'Usuarios'
    }

  }
};

