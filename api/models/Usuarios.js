/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

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
    idamigo:{
      collection:'Amigos',
      via:'iduser'
    },

    fullname:function(){
      return this.name+' '+this.apellidoPaterno+' '+this.apellidoMaterno;
    }
    
    }
	
  }
