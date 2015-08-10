/**
* Publicaciones.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	publicacion:{
  		type:'text'
  	},
    username:{
      type:'string'
    },
    iduser:{
      type:'string'
    },
    idroom:{
      collection:'Roompost',
      via:'idpost'

    }
  	
  }
};

