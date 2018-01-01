var demoServices = angular.module('demoServices');

demoServices.controller('FirstCtrl', [ '$scope','helloWorldService', 
		function($scope,helloWorldService) {
	
	
	init = function() {

		var w = helloWorldService.hello(); // 'Hello World'
		console.log('Services:' + w);
	}

	init();
	
	$scope.username="Dev";
	
	$scope.msgtype="";
	$scope.msg=function(){
	
	}
	
	
} ]);
