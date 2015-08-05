module.exports = function(req, res, next) {
    if(req.isSocket || req.isAuthenticated()) {
    	console.log("es una llamada de socket");
        return next();
    } else {
		return res.forbidden();
    	
    	}

};