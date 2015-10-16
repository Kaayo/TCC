var scotchApp = angular.module('scotchApp',['ngRoute']); //estanciando objeto angular 

	scotchApp.config(function($routeProvider){
		$routeProvider

			.when('/listar', {
				templateUrl: 'url/index.html'	

			})

			.when('/', {
				templateUrl: 'url/index.html'	

			});

			
	});

