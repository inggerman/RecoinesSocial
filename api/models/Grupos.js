/**
* Grupos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	nameGroup:{
  		type:'string'
  	},
  	description:{
  		type:'string'
  	},
  	usercreador:{
  		type:'string'
  		
  	},
  	iduser:{
  		collection:'Users',
      	via:'idGroupMiembro'
  	}

  }
};

