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


// Publicaciones.create({publicacion:'Hola Mundo1',username:'ghl',iduser:'1'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo2',username:'ghl',iduser:'1'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo3',username:'ghl',iduser:'1'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo4',username:'ghl13',iduser:'2'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo5',username:'ghl13',iduser:'2'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo6',username:'ghl13',iduser:'2'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo7',username:'ghl13',iduser:'2'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo8',username:'phd',iduser:'3'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo9',username:'phd',iduser:'3'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo10',username:'phd',iduser:'3'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo11',username:'phd',iduser:'3'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo12',username:'phd',iduser:'3'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo13',username:'rld',iduser:'4'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo14',username:'rld',iduser:'4'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo15',username:'cdl',iduser:'5'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo16',username:'cdl',iduser:'5'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo17',username:'mlxm',iduser:'6'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo18',username:'mlxm',iduser:'6'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo19',username:'lbp',iduser:'7'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo21',username:'lbp',iduser:'7'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo22',username:'asl',iduser:'8'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo23',username:'acl',iduser:'9'}).exec(console.log);
// Publicaciones.create({publicacion:'Hola Mundo124',username:'acl',iduser:'9'}).exec(console.log);




// Usuarios.create({name:'German',apellidoPaterno:'Hernandez',apellidoMaterno:'Lopez',username:'ghl'}).exec(console.log);
// Usuarios.create({name:'Gustavo',apellidoPaterno:'Hernandez',apellidoMaterno:'Lopez',username:'ghl13'}).exec(console.log);
// Usuarios.create({name:'Pascual',apellidoPaterno:'Hernandez',apellidoMaterno:'Dominguez',username:'phd'}).exec(console.log);
// Usuarios.create({name:'Rocio',apellidoPaterno:'Lopez',apellidoMaterno:'Degante',username:'rld'}).exec(console.log);
// Usuarios.create({name:'Carolina',apellidoPaterno:'Degante',apellidoMaterno:'Lopez',username:'cdl'}).exec(console.log);
// Usuarios.create({name:'Maria Luisa',apellidoPaterno:'Xochihua',apellidoMaterno:'Mendieta',username:'mlxm'}).exec(console.log);
// Usuarios.create({name:'Pedro',apellidoPaterno:'Briones',apellidoMaterno:'Lopez',username:'lbp'}).exec(console.log);
// Usuarios.create({name:'Anacleto',apellidoPaterno:'smith',apellidoMaterno:'Mendez',username:'asl'}).exec(console.log);
// Usuarios.create({name:'Aurelio',apellidoPaterno:'casillas',apellidoMaterno:'Lopez',username:'acl'}).exec(console.log);
Users.create({ncontrol:'10370710',username:'gerhl92',password:'perro',nombre:'Germán',apellido_p:'Hernandez',apellido_m:'lpz',correo_inst:'pato1@cc.com'}).exec(console.log);
Users.create({ncontrol:'10370711',username:'hlg',password:'perro',nombre:'fgfdg',apellido_p:'Xochihua',apellido_m:'lpz',correo_inst:'pato2@cc.com'}).exec(console.log);
Users.create({ncontrol:'10370712',username:'marlux',password:'perro',nombre:'Maria Luisa',apellido_p:'Xochihua',apellido_m:'lpz',correo_inst:'pato3@cc.com'}).exec(console.log);
Users.create({ncontrol:'10370713',username:'pascuis',password:'perro',nombre:'Pascual',apellido_p:'Hernandez',apellido_m:'lpz',correo_inst:'pato14@cc.com'}).exec(console.log);


Amigos.create({id2:'10370710',name:'German',apellidoPaterno:'Hernandez',apellidoMaterno:'Lopez',username:'gerhl92',iduser:10370711}).exec(console.log);
Amigos.create({id2:'10370711',name:'fgfdg',apellidoPaterno:'Xochihua',apellidoMaterno:'lpz',username:'hlg',iduser:10370710}).exec(console.log);
Amigos.create({id2:'10370712',name:'Maria Luisa',apellidoPaterno:'Xochihua',apellidoMaterno:'lpz',username:'marlux',iduser:10370710}).exec(console.log);

Roompost.create({nombre:'gerhl92'}).exec(console.log);
Roompost.create({nombre:'hlg'}).exec(console.log);
Roompost.create({nombre:'marlux'}).exec(console.log);
Roompost.create({nombre:'pascuis'}).exec(console.log);
Roompost.create({nombre:'cdl'}).exec(console.log);
Roompost.create({nombre:'mlxm'}).exec(console.log);
Roompost.create({nombre:'lbp'}).exec(console.log);
Roompost.create({nombre:'asl'}).exec(console.log);
Roompost.create({nombre:'acl'}).exec(console.log);


Agenda.create({titulo:"omg",descripcion:"soy un recordatorio agendado",recordatorio:'2015-12-08T05:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg2",descripcion:"soy un recordatorio agendado2",recordatorio:'2015-12-08T07:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg3",descripcion:"soy un recordatorio agendado3",recordatorio:'2015-11-08T08:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg4",descripcion:"soy un recordatorio agendado4",recordatorio:'2015-12-08T06:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg5",descripcion:"soy un recordatorio agendado5",recordatorio:'2015-12-08T06:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg6",descripcion:"soy un recordatorio agendado6",recordatorio:'2015-12-08T06:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg4",descripcion:"soy un recordatorio agendado4",recordatorio:'2015-12-08T06:00:00.000Z',username:'gerhl92',ncontrol:'10370710'}).exec(console.log);
Agenda.create({titulo:"omg5",descripcion:"soy un recordatorio agendado5",recordatorio:'2015-12-08T06:00:00.000Z',username:'ghl13',ncontrol:'10370712'}).exec(console.log);
Agenda.create({titulo:"omg6",descripcion:"soy un recordatorio agendado6",recordatorio:'2015-12-08T06:00:00.000Z',username:'ghl13',ncontrol:'10370712'}).exec(console.log);


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


ComentariosPosts.create({comentario:'prueba1',idpost:'1',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba2 ',idpost:'1',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba2 ',idpost:'1',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba3',idpost:'1',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba4',idpost:'1',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba5 ',idpost:'2',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba6',idpost:'2',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prubas7 ',idpost:'2',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'pruebas8',idpost:'3',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'pruebas9 ',idpost:'3',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba30',idpost:'2',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'gerhl92'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba50',idpost:'3',iduser:'10370710',nombre:'German',apellido:'hernandez',username:'hlg'}).exec(console.log);
ComentariosPosts.create({comentario:'prueba35',idpost:'4',iduser:'10370711',nombre:'fgfdg',apellido:'Xochihua'}).exec(console.log);


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





  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
