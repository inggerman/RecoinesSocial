'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.factory('Authentication',[

	function(){
		this.user=window.user;
		this.room=window.room;
		this.fulluser=window.fulluser;

		return{
			user:this.user,
			room:this.room,
			fulluser:this.fulluser
		};
	}
	]);
