define(
	[
		_INCLUDES_
	],
	function(angular) {
		String.prototype.capitalize = function() {
			return this.charAt(0).toUpperCase() + this.slice(1);
		};

		var controllers = angular.module('controllers', []);
		for (var i = 1; i < arguments.length; i++) {
			var controller = arguments[i];
			controller.inject.push(controller.controller);
			controllers.controller(controller.name, controller.inject);
		}
		return controllers;
	}
);