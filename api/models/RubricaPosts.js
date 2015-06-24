/**
* RubricaPost.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	excelente:{
  		type:'integer',
  		defaultsTo:'0'
  	},
  	bueno:{
  		type:'integer',
  		defaultsTo:'0'
  	},
  	malo:{
  		type:'integer',
  		defaultsTo:'0'
  	},
  	idpost:{
  		model:'Posts'
  	}
  	
  	
  }

  }
