'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var idxgen = require('../index_generator.js');


var RouteGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the route subgenerator with the argument ' + this.name + '.');
  },

   askFor: function() {
    var done = this.async();
    var prompts = [{
      name: 'templateUrl',
      message: 'Template url[relative js/partials]:'
    },
	{
      name: 'url',
      message: 'Url:'
    },
    {
      name: 'controller',
      message: 'Controller name(without .js):'
    }];

    this.prompt(prompts, function(props) {
      for(var i in props) {
      	this[i] = props[i];
      }
      done();
    }.bind(this));
  },

  files: function () {
  	var dir = "routes"
  	this.mkdir(dir);
    this.template('routeTemplate.js',dir+'/'+this.name+'.js');
    this.write('partials/'+this.templateUrl,'<p>Content goes here</p>');
    idxgen.generate(this,dir,this.name,false);
    if (this.controller) {
    	this.invoke('rangular:controller',{args:[this.controller]});	
    }
  }
});

module.exports = RouteGenerator;