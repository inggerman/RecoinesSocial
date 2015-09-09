/**
* ComentarioPost.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	comentario:{
  		type:'text'
  	},
    nombre:{
      type:'string'
    },
    apellido:{
      type:'string'
    },
    username:{
      type:'string'
    },
    megusta:{
      type:'string'
    },
    nomegusta:{
      type:'string'
    },
  	idpost:{
  		model:'Posts'
  	},
  	iduser:{
  		model:'Users'
  	}

  }
};
