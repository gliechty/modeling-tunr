	angular.module("tunrApp")
	.controller("ManagerIndexController", ManagerIndexController)
	.controller("ManagerShowController", ManagerShowController)
	.controller("ManagerNewController", ManagerNewController)
	.controller("ManagerEditController", ManagerEditController);
// var managers = [
// 	{
// 		name: "Ricky",
// 		email: 'ricky@ricky.com',
// 		office_number: '439-094-3387',
// 		cell_phone_number: '664-384-8375',
// 		id: 0
// 	},
// 	{
// 		name: "Andre",
// 		email: 'hi@ry.com',
// 		office_number: '774-338-3387',
// 		cell_phone_number: '364-288-8375',
// 		id: 1
// 	}
// ];

ManagerIndexController.$inject = ["$http"];
function ManagerIndexController($http) {
	var vm = this;
	vm.deleteManager = deleteManager;

	function getAllManagers() {
		$http.get('/api/managers')
			.then(function(response) {
				vm.allManagers = response.data;
			});		
	}

	function deleteManager(manager) {
		$http.delete('/api/managers/'+manager.id)
			.then(function(response) {
				var managerIndex = vm.allManagers.indexOf(manager);
				vm.allManagers.splice(managerIndex, 1);
			});
	}

	getAllManagers();
}


ManagerShowController.$inject = ['$http', "$routeParams"];
function ManagerShowController($http, $routeParams){
	var vm = this;

	function getOneManager(){
		console.log($routeParams.id);
		$http.get('api/managers/'+$routeParams.id)
			.then(function(response){
				console.log(response);
				vm.oneManager = response.data;
			});

	}

	getOneManager();

}

ManagerNewController.$inject = ["$http", "$location"];
function ManagerNewController($http, $location){
	var vm = this;
	vm.saveManager = saveManager;

	function saveManager() {
		console.log(vm.newManager);
		$http.post('/api/managers/', vm.newManager)
			.then(function(response) {
				var manager = response.data;
				$location.path("/managers/" + manager.id);
			});		
	}
}

ManagerEditController.$inject = ["$http", "$routeParams", "$location"];
function ManagerEditController($http, $routeParams, $location) {
	var vm = this;
	vm.updateManager = updateManager;

	function getManager() {
		console.log($routeParams.id);
		$http.get('/api/managers/'+$routeParams.id)
			.then(function(response) {
				console.log(response);
				vm.updatedManager = response.data;
			});			
	}

	function updateManager() {
		$http.put('/api/manager/'+$routeParams.id, vm.updatedManager)
			.then(function(response) {
				var manager = response.data;
				$location.path("/artists/" + manager.id);
			});			
	}

	getManager();
}
























































