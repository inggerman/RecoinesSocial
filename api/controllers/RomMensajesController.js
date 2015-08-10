/**
 * RomMensajesController
 *
 * @description :: Server-side logic for managing rommensajes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	
	sockets:function(req,res){
		var teamNames = [{name:'blackhawks'}, {name:'lightning'}];
  		var hawks_fans = sails.sockets.subscribers('blackhawks');
  		var lightning_fans = sails.sockets.subscribers('lightning');

  		res.view('usersocket',{
  			teamNames:teamNames,
  			hawks_fans:hawks_fans,
  			lightning_fans:lightning_fans

  		});
	},
	joinroom:function(req,res){
		var socketId = sails.sockets.id(req.socket);
		console.log(socketId);
		var tt=req.session.user[socketId].ncontrol;
		console.log(tt);
		console.log(req.param("nombre"));
		sails.sockets.join(req.socket,req.param("nombre"));

	},

	broadcastnews: function (req, res) {
	    var data = {};
	    data.name = req.param("team");
	    data.news = req.param("news");
	    sails.sockets.broadcast(data.name, "news", data);
}
	
};

