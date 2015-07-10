var passport = require('passport');

module.exports = {
    
    login: function(req, res) {
        res.view();
    },
    process: function(req, res) {
        passport.authenticate('local', function(err, user, info) {
          console.log(user);
            if( (err)||(!user) ) {
                return res.send({
                    message: 'Fallo la identificacion del user'
                });
                res.send(err);
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

        Users.create({ncontrol:ncontrol,password:password,nombre:nombre,apellido_p:apellidop,apellido_m:apellidom,correo_inst:correoi,correo_pers:correop}).exec(function(err,user){

            if(err){
                return res.redirect('/singup');
            } 

            req.logIn(user,function(err){
            if(err) return negotiate(err);
             req.flash('msj','Bienvedino A recoines');
            return res.redirect('/');
        });
            
        });

        }else{
           return res.view(); 
        }

        
        
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