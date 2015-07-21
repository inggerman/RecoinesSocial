
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// module.exports = {
	
// 	findOne: function(req,res){


		

// 		//var id=req.param('screenName');
// 		User.findOne({
// 			screenName: req.param('screenName')
// 		}).exec(function(err,user){

// 			if(err) return res.negotiate(err);

// 			if(!user){
// 				return res.notFound();
// 			}

// 			// Suscríbete a los cambios
// 			//  en este registro de usuario en particular
// 			//   (enviará eventos socket cuando estas cosas pasan )
// 			//User.subscribe(req,user.id);

// 			//return res.json(user); 
// 			// Emoji.find({
// 			// 	owner:user.id
// 			// }).exec(function(err,emojis){
// 			// 	return res.view('profile',{

// 			// 	user:user,
// 			// 	emojis:emojis
				
// 			// });
			

// 			// });

// 		});
// 	}




	
// };
// 
// 
var passport = require('passport');
module.exports = {
    findUser:function(req,res){

        var username=req.param('username');
        if(username){
            Users.findOne({username:username}).exec(function(err,user){

                if(err) return res.negotiate(err);

                if(!user){
                    return res.notFound();
                }
                 console.log(user.ncontrol);

                return res.send(user);
            
            });
        }
    },

    login: function (req,res)
    {
        if(!req.user){
            res.view({
                message:'Usuario No conectado'
            });
        }else{
            res.redirect('/');
        }
        
    },

    singup:function(req,res){
        return res.view('auth/singup'); 
    },

    registrationuser:function(req,res){

        if(!req.user){
        var ncontrol=req.param('ncontrol');
        var nombre=req.param('nombre');
        var username=req.param('username');
        var password=req.param('password');
        var apellidop=req.param('apellido_p');
        var apellidom=req.param('apellido_m');
        var correoi=req.param('correo_inst');
        var correop=req.param('correo_pers');

        Users.create({ncontrol:ncontrol,username:username,usernamepassword:password,nombre:nombre,apellido_p:apellidop,apellido_m:apellidom,correo_inst:correoi,correo_pers:correop}).exec(function(err,user){

            if(err){
                return res.redirect('/śingup');
            } 

            req.login(user,function(err){
            if(err) return negotiate(err);

            return res.redirect('/');
        });
            
        });

        }else{
           return res.view(); 
        }

        
        
    },

    passport_local: function(req, res)
    {
        passport.authenticate('local', function(err, user, info)
        {
            if ((err) || (!user))
            {
                res.redirect('/user/login');
                return;
            }

            req.logIn(user, function(err)
            {
                if (err)
                {
                    res.redirect('/user/login');
                    return;
                }

                res.redirect('/');
                return;
            });
        })(req, res);
    },

    logout: function (req,res)
    {
        req.logout();
        res.redirect('/');
    },



  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}


};