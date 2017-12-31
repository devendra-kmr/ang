var demoServices = angular.module('demoServices',[ 'ui.router' ]).config(
		function($stateProvider) { 
			$stateProvider.state('firstpage', {
				url : "/firstpage",
				templateUrl : "pages/first.html",
				controller : "FirstCtrl"

			})
			.state('secondpage', {
				url : "/secondpage",
				templateUrl : "pages/second.html",
				controller : "SecondCtrl"

			});
			
			
		}).controller("MainCtrl", [ '$scope', '$http', function($scope, $http) {

			
} ]);


















//ui.router - the main "umbrella" module .You'll need to include only this module as the dependency within your angular app.