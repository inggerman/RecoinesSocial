var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
 bcrypt = require('bcrypt');
 
passport.serializeUser(function(user, done) {
    done(null, user.ncontrol);
});

passport.deserializeUser(function(id, done) {
    Users.findByNcontrol(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'ncontrol',
        passwordField: 'password'
    },
    function(ncontrol, password, done) {
        Users.findOne({ ncontrol: ncontrol }).exec(function(err, user) {
            if(err) { return done(err); }
            if(!user) { return done(null, false, { message: 'Unknown user ' + ncontrol }); }
            bcrypt.compare(password, user.password, function(err, res) {
                if(!res) return done(null, false, {message: 'Invalid Password'});
                return done(null, user);
            });
        });
    }
));