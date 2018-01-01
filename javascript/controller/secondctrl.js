var demoServices = angular.module('demoServices');

demoServices.controller('SecondCtrl', [ '$scope', '$http', 'helloWorldFactory',
		function($scope, $http, helloWorldFactory) {

			init = function() {

				var w = helloWorldFactory.hello(); // 'Hello World'
				console.log('Factory :' +w);
			}

			init();

			$scope.userDetails = [];

			$scope.loadUserData = function() {
				$http({
					method : 'GET',
					url : 'data/userList.json'
				}).success(function(data, status, headers, config) {

					$scope.userDetails = data.userList;

				}).error(function(data, status, headers, config) {
					alert("Error : " + data)
				});
			};

		} ]);