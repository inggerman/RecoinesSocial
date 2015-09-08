/**
* Horario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    

    clave_materia:{
      type:'string'
    },
    nombre_materia:{
      type:'string'
    },
    lunes:{
      type:'time'
    },
    martes:{
      type:'time'
    },
    miercoles:{
      type:'time'
    },
    jueves:{
      type:'time'
    },
    viernes:{
      type:'time'
    },
    sabado:{
      type:'time'
    }

  }
};

