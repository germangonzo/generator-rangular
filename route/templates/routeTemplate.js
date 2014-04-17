define([
		'text!partials/<%=templateUrl%>'
	],
	function(html1) {
		return {
			name: '<%=name%>',
			route: {
				url: '<%=url%>',
				views: {
					'': {
						template: html1,
						controller: '<%=controller%>'
					}
				},
				resolve: {}
			}
		};
	}
);