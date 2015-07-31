/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {


Users.create({ncontrol:'10370710',username:'gerhl92',password:'perro',nombre:'Germán',apellido_p:'Hernandez',apellido_m:'lpz',correo_inst:'pato1@cc.com'}).exec(console.log);
Users.create({ncontrol:'10370711',username:'hlg',password:'perro',nombre:'fgfdg',apellido_p:'Xochihua',apellido_m:'lpz',correo_inst:'pato2@cc.com'}).exec(console.log);
Users.create({ncontrol:'10370712',username:'marlux',password:'perro',nombre:'Maria Luisa',apellido_p:'Xochihua',apellido_m:'lpz',correo_inst:'pato3@cc.com'}).exec(console.log);
Users.create({ncontrol:'10370713',username:'pascuis',password:'perro',nombre:'Pascual',apellido_p:'Hernandez',apellido_m:'lpz',correo_inst:'pato14@cc.com'}).exec(console.log);

PersonalDataUsers.create({edad:23,user:'10370710'}).exec(console.log);
PersonalDataUsers.create({edad:23,user:'10370711'}).exec(console.log);
PersonalDataUsers.create({edad:23,user:'10370712'}).exec(console.log);
PersonalDataUsers.create({edad:23,user:'10370713'}).exec(console.log);

Posts.create({post:'holaperrosdelmal1',username:'gerhl92',iduser:'10370710',iduser2:'10370711'}).exec(console.log);
Posts.create({post:'holaperrosdelmal2',username:'gerhl92',iduser:'10370710'}).exec(console.log);
Posts.create({post:'holaperrosdelmal3',username:'gerhl92',iduser:'10370710'}).exec(console.log);
Posts.create({post:'holaperrosdelmal4',username:'hlg',iduser:'10370711'}).exec(console.log);
Posts.create({post:'holaperrosdelmal5',username:'hlg',iduser:'10370711'}).exec(console.log);
Posts.create({post:'holaperrosdelmal6',username:'hlg',iduser:'10370711'}).exec(console.log);
Posts.create({post:'holaperrosdelmal7',username:'marlux',iduser:'10370712'}).exec(console.log);
Posts.create({post:'holaperrosdelmal8',username:'marlux',iduser:'10370712'}).exec(console.log);
Posts.create({post:'holaperrosdelmal78',username:'gerhl92',iduser:'10370710'}).exec(console.log);


RubricaPosts.create({excelente:1,idpost:1}).exec(console.log);
RubricaPosts.create({bueno:1,idpost:2}).exec(console.log);
RubricaPosts.create({bueno:1,idpost:3}).exec(console.log);
RubricaPosts.create({malo:1,idpost:4}).exec(console.log);
RubricaPosts.create({malo:1,idpost:5}).exec(console.log);
RubricaPosts.create({malo:1,idpost:6}).exec(console.log);
RubricaPosts.create({excelente:1,idpost:7}).exec(console.log);
RubricaPosts.create({excelente:1,idpost:8}).exec(console.log);


ComentariosPosts.create({comentario:'prueba1',idpost:'1',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba2 ',idpost:'1',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba2 ',idpost:'1',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba3',idpost:'1',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba4',idpost:'1',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba5 ',idpost:'2',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba6',idpost:'2',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prubas7 ',idpost:'2',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'pruebas8',idpost:'3',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'pruebas9 ',idpost:'3',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba30',idpost:'2',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba50',idpost:'3',iduser:'10370710'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba35',idpost:'4',iduser:'10370711'}).exec(console.log);


Grupos.create({nameGroup:'Mate',description:'es un grupo de 2+2',usercreador:'10370710'}).exec(function(){

	console.log

});


Grupos.create({nameGroup:'español',description:'es un grupo de 2+2',usercreador:'10370710'}).exec(function(){

	console.log

});

Grupos.create({nameGroup:'programacion',description:'es un grupo de 2+2',usercreador:'10370711'}).exec(function(){

	console.log

});


Grupos.create({nameGroup:'fut',description:'es un grupo de 2+2',usercreador:'10370711'}).exec(function(){

	console.log

});



Grupos.findOne(1).exec(function (err, grupo) {
  grupo.iduser.add(10370710);
  grupo.save();
});

Grupos.findOne(1).exec(function (err, grupo) {
  grupo.iduser.add(10370711);
  grupo.save();
});

Grupos.findOne(2).exec(function (err, grupo) {
  grupo.iduser.add(10370710);
  grupo.save();
});

Grupos.findOne(3).exec(function (err, grupo) {
  grupo.iduser.add(10370711);
  grupo.save();
});

Grupos.findOne(4).exec(function (err, grupo) {
  grupo.iduser.add(10370711);
  grupo.save();
});

console.log('------------------------------------------------------------------------');
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
