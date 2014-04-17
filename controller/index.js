'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var idxgen = require('../index_generator.js');



var ControllerGenerator = yeoman.generators.NamedBase.extend({
	init: function() {
		console.log('You called the controller subgenerator with the argument ' + this.name + '.');
	},

	files: function() {
		var dir = "controllers";
		this.mkdir(dir);
		var controllerPath =  dir+'/' +this.name +".js";
		this.template('controllerTemplate.js', controllerPath);
		idxgen.generate(this,dir,this.name, true);
	}
});

module.exports = ControllerGenerator;