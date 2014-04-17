requirejs({
	"baseUrl": "js/",
	"paths": {
		"text": "../bower_components/requirejs-text/text",
		"domReady": "../bower_components/requirejs-domready/domReady",
		"angular": [
			"../bower_components/angular/angular",
			"http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min",
			"angular.min"
		],
		"jquery": [
			"../bower_components/jquery/dist/jquery",
			"http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
			"jquery.min"
		],
		"ui.router": "../bower_components/angular-ui-router/release/angular-ui-router",
		"ui.bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap-tpls",
		"app": "app"
	},
	"shim": {
		"angular": {
			"exports": "angular"
		},
		"jquery": {
			"exports": "jquery"
		},
	
		"ui.router": {
			"deps": ["angular"],
		},
		"ui.bootstrap": {
			"deps": ["angular"]
		}
	},
	priority: [
		"angular"
	]
}, [
	"domReady",
	"jquery",
	"angular",
	"app"
], function(domReady, jquery, angular) {
	domReady(function() {
		
		// require(['pluginsCollection'], function() {
			return angular.bootstrap(document, ["hcoApp"]);
		// });
	});
});