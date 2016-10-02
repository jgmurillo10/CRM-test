angular.module('userApp',[
		'ngAnimate',
		'app.routes',
		'authService',
		'mainCtrl',
		'userCtrl',
		'userService'
	])

//application config to integrate token into requests
.config(function($httpProvider){
	//atach out auth interceptor to the HTTP requests
	$httpProvider.interceptors.push('AuthInterceptor');
});