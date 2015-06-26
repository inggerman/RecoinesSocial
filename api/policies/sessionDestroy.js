module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  // if (req.session.authenticated) {
  //   return next();
  // }
   if (user.session) {
    
    if(setTimeout(function() {}, 3000)){
    
    return res.forbidden('se ha terminado el tiempo de la session volver a iniciar');
    
  }
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('No tienes acceso a esta página');
};