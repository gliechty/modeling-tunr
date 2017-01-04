angular.module("tunrApp", ['ngRoute'])
	.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
    	//Main Routes
      .when('/', {
        templateUrl: '/templates/home.html'
      })
      .when('/about', {
      	templateUrl: '/templates/about.html'
      })

			//Artist Routes
			  
			// index
			.when('/artists', {
				templateUrl: '/templates/artists/index.html',
				controller: "ArtistIndexController as artistsController"
			})

			// new
			.when('/artists/new', {
				templateUrl: '/templates/artists/new.html',
				controller: "ArtistNewController as artistNewController"
			})

			// show
			.when('/artists/:id', {
				templateUrl: '/templates/artists/show.html',
				controller: "ArtistShowController as artistController"
			})

			// edit
			.when('/artists/:id/edit', {
				templateUrl: '/templates/artists/edit.html',
				controller: "ArtistEditController as artistEditController"
			})

			//Manager Routes
			  
			// index
			.when('/managers', {
				templateUrl: '/templates/managers/index.html',
				controller: "ManagerIndexController as managersController"
			})

			// new
			.when('/managers/new', {
				templateUrl: '/templates/managers/new.html',
				controller: "ManagerNewController as managerNewController"
			})

			// show
			.when('/managers/:id', {
				templateUrl: '/templates/managers/show.html',
				controller: "ManagerShowController as managerController"
			})

			// edit
			.when('/managers/:id/edit', {
				templateUrl: '/templates/managers/edit.html',
				controller: "ManagersEditController as managerEditController"
			});	
  });











