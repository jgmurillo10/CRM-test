angular.module('userCtrl', ['userService'])

.controller('userController', function(User){
	var vm=this;

	//set a processing var to show loading things
	vm.processing = true;

	//grab all the users at page load

	User.all()
		.then(function(data){
			//when all the users come back, remove the proncessing var
			vm.processing=false;
			//bind the users that come back to vm.users
			vm.users=data;
		})

		//function to delete an user
	vm.deleteUser = function(id){
		vm.processing =true;
		//accepts the user id as a parameter
		User.delete(id)
			.success(function(data){
				 // get all users to update the table
				 // you can also set up your api
				 // to return the list of users with the delete call 
				 User.all()
				 	.success(function(data){
				 		vm.processing = false;
				 		vm.users=data;
				 	});
			});
	}
})