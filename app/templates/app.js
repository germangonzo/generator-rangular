define([
		'angular',
		'services/services',
		'directives/directives',
		'filters/filters',
		'controllers/controllers',
		'factories/factories',
		'configs/configs'
	],
	function(angular) {
		'use strict';

		var myApp = angular.module('myApp', [
			'ui.router',
			//TODO: prompt to include bootstrap
			'ui.bootstrap',
			'directives',
			'services',
			'filters',
			'controllers',
			'factories',
			'configs'
		]);

		myApp.run(['$rootScope', '$timeout',
			function($rootScope, $timeout) {
				// Manage error messages
				$rootScope.ErrorMessages = [];

				$rootScope.$watch('ErrorMessages', function(val) {
					if (val.legth > 0) {
						$('.bar-alert').show();
					}else{
						$('.bar-alert').hide();
					}
				});

				$rootScope.errorsAdd = function(messages, type) {
					if (!type){
						type='info';
					}
					if (angular.isArray(messages)) {
						angular.forEach(messages, function(value, key) {
							if (angular.isString(value)) {
								$rootScope.ErrorMessages.push({
									type: type,
									text: messages
								});
								$rootScope.errorTimeout();
							} else {
								$rootScope.ErrorMessages.push({
									type: type,
									text: angular.toJson(messages)
								});
								$rootScope.errorTimeout();
							}
						});
					} else if (angular.isString(messages)) {
						$rootScope.ErrorMessages.push({
							type: type,
							text: messages
						});
						$rootScope.errorTimeout();
					} else {
						$rootScope.ErrorMessages.push({
							type: type,
							text: angular.toJson(messages)
						});
						$rootScope.errorTimeout();
					}
				};

				$rootScope.errorTimeout = function() {
					$timeout(function() {
						$rootScope.ErrorMessages.shift();
					}, 7000);
				};

				$rootScope.errorDel = function(index) {
					$rootScope.ErrorMessages.splice(index, 1);
				};
			}
		]);

		return myApp;
	}
);