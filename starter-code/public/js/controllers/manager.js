	angular.module("tunrApp")
	.controller("ManagerIndexController", ManagerIndexController)
	.controller("ManagerShowController", ManagerShowController);

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
		// vm.oneManager = managers;
		console.log($routeParams.id);
		// res.json(managers[$routeParams.id]);
		vm.oneManager = managers[$routeParams.id];
	}

	getOneManager();

}









