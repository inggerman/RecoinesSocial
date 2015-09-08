var passport = require('passport');

module.exports = {
    
    login: function(req, res) {
        res.view();
    },
    process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
          console.log(user);
            if( (err)||(!user) ) {
                req.flash('no','Fallo la Autentificación del Usuario password o n.control incorrectors');

                req.flash('fail','Fallo la Autentificación del usuario, contraseña o numero de control incorrectos');
                return res.redirect('/login');
                //res.send(err);
            }
            req.logIn(user, function(err) {
                if(err) res.send(err);
                req.flash('msj','Bienvenido A recoines');
                return res.redirect('/');
            });
        }) (req, res);
    },
    singup:function(req,res){
        return res.view(); 
    },

    registrationuser:function(req,res){

        if(!req.user){
        var ncontrol=req.param('ncontrol');
        var nombre=req.param('nombre');
        var password=req.param('password');
        var apellidop=req.param('apellido_p');
        var apellidom=req.param('apellido_m');
        var correoi=req.param('correo_inst');
        var correop=req.param('correo_pers');
        var username=req.param('username');
        var tipouser=req.param('tipo_user');
        var semestre=req.param('semestre');
        var idcarrera=req.param('idcarrera');

        console.log(ncontrol+" "+nombre+" "+password+" "+apellidop+" "+apellidom+" "+correoi+" "+correop+" "+username+" "+tipouser+" "+semestre);

        // if(tipouser=='estudiante'){

        //     Alumnos.count({ncontrol:ncontrol}).exec(function(err,num){
        //     if(err){return res.negotitate(err)}

        //      if(num>0){

        //               Users.create({username:username,ncontrol:ncontrol,password:password,nombre:nombre,apellido_p:apellidop,apellido_m:apellidom,correo_inst:correoi,correo_pers:correop,tipo_user:tipouser,semestre:semestre}).exec(function(err,user){

        //                     if(err){
        //                         return res.redirect('/singup');
        //                     } 

        //                     req.logIn(user,function(err){
        //                     if(err) return negotiate(err);
        //                      req.flash('msj','Bienvedino A recoines');
        //                     return res.redirect('/');
        //                 });
                            
        //                 });
        //      }else{

        //         req.flash('msj','No hay un Alumno registrado con este numero de control verifica tus datos');
        //             return res.redirect('/singup');
        //      }   

        // });


        // }else{

        //      Docentes.count({ncontrol:ncontrol}).exec(function(err,num){
        //     if(err){return res.negotitate(err)}

        //          if(num>0){

        //               Users.create({username:username,ncontrol:ncontrol,password:password,nombre:nombre,apellido_p:apellidop,apellido_m:apellidom,correo_inst:correoi,correo_pers:correop,tipo_user:tipouser}).exec(function(err,user){

        //                     if(err){
        //                         return res.redirect('/singup');
        //                     } 

        //                     req.logIn(user,function(err){
        //                         if(err) return negotiate(err);
        //                          req.flash('msj','Bienvedino A recoines');
        //                         return res.redirect('/');
        //                 });
                            
        //                 });
        //          }else{
        //             req.flash('msj','No hay un Docente registrado con este numero de control verifica tus datos');
        //             return res.redirect('/singup');

        //          }   

        //     });

        // }


        

      
    }
       
        Users.create({username:username,ncontrol:ncontrol,password:password,nombre:nombre,apellido_p:apellidop,apellido_m:apellidom,correo_inst:correoi,correo_pers:correop,tipo_user:tipouser,semestre:semestre,idcarrera:idcarrera}).exec(function(err,user){
            if(err){
                return res.redirect('/singup');
             } 

             Roompost.create({nombre:username}).exec(function(){

                    req.logIn(user,function(err){
                        if(err) return negotiate(err);
                        req.flash('msj','Bienvedino A recoines');
                         return res.redirect('/');
                    });

             });

           
                            
                            
        });
        
    },

    logout: function(req, res) {
        req.logOut();
        //res.send('logout successful');
        res.redirect('/')
    }
};

module.exports.blueprints = {
    actions: true,
    rest: true,
    shortcuts: true
};