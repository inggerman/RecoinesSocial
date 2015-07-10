angular.module.factory('Authentification',[

	function(){
		this.user=window.user;

		return{
			user:this.user
		};
	}
	]);