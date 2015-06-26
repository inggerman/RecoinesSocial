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
    login: function (req,res)
    {
        res.view();
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