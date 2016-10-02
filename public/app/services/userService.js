angular.module('userService',[])

.factory('User',function($http){
	//create the object
	var userFactory={};

	//get a single user

	userFactory.get = function(id){
		return $http.get('/api/users/'+id);
	};

	//get all users

	userFactory.get = function(){
		return $http.get('/api/users/');
	};

	//create an user

	userFactory.create = function(userData){
		return $http.post('/api/users/',userData);
	};

	//update an user

	userFactory.update = function(id,userData){
		return $http.put('/api/users/'+id,userData);
	};

	//delete an user

	userFactory.delete = function(id){
		return $http.delete('/api/users/'+id);
	};

	//return our entire userFactory object

	return userFactory;
});