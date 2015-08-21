/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	post:{
  		type:'text',
  		required:true
  	},
  	urlImage:{
  		type:'string'
  	},
    username:{
      type:'string'
    },
	 iduser:{
  		model:'Users'
  	},
    iduser2:{
      model:'Users'
    },
    idroom:{
      collection:'Roompost',
      via:'idpost'

    },

    rubricapost:{
  		model:'Rubricaposts'
  	},
  	idcomentario:{
  		collection:'ComentariosPosts',
  		via:'idpost'
  	}

  }
};

