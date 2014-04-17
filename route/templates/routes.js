define(
	[
		_INCLUDES_
	],
	function() {
		var routes = [];
		for (var i = 0; i < arguments.length; i++) {
			routes.push(arguments[i]);
		}
		return routes;
	}
);