angular.module('mainCtrl',[])

.controller('mainController', function($rootScope,$location,Auth){
	var vm=this;

	//get info if a person is logged in
	vm.loggedIn=Auth.isLoggedIn();

	//check to see if an user is logged in every request
	$rootScope.$on('$routeChangeStart',function(){
		vm.loggedIn = Auth.isLoggedIn();

		//get user info on route change
		Auth.getUser()
			.success(function(data){
				vm.user = data;
			});
	});

	//function to handle login form
	vm.doLogin = function(){
		vm.processing =true;
		//clear the error
		vm.error= '';
		//call the Auth.login function
		Auth.login(vm.loginData.username, vm.loginData.password)
			.success(function(data){

				vm.processing =false;
				//if an user succesfully logs in, redirect to users page
				
				if(data.success)
					$location.path('/users');
				else
					vm.error= data.message;
			});
	};

	//function to handle loggin out
	vm.doLogout = function(){
		Auth.logout();
		//reset all user info
		vm.user = {};
		$location.path('/login');
	};

});