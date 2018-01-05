var demoServices = angular.module('demoServices');


demoServices.service('helloWorldService', function(){
		   this.hello = function() {
			    return "Hello World";
			     }; });
			     