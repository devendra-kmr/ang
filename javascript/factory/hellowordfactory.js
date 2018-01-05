var demoServices = angular.module('demoServices'); 
demoServices.factory('helloWorldFactory', function(){
		  return { 
			  hello: function() {
				   return "Hello World"; 
			     } } 
			     });