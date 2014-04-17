'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RangularGenerator = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../package.json');

    this.on('end', function() {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function() {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Rangular generator.'));

    var prompts = [{
      name: 'blogName',
      message: 'What do you want to call your blog?'
    }];

    this.prompt(prompts, function(props) {
      this.blogName = props.blogName;

      done();
    }.bind(this));
  },

  app: function() {
    // this.mkdir('app');
    // this.mkdir('app/templates');

    // this.copy('_package.json', 'package.json');
   
    this.mkdir('css');
    this.mkdir('img');
    this.mkdir('fonts');
    this.mkdir('js');

    this.mkdir('js/configs');
    this.mkdir('js/controllers');
    this.mkdir('js/directives');
    this.mkdir('js/factories');
    this.mkdir('js/partials');
    this.mkdir('js/routes');
    this.mkdir('js/services');


    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = RangularGenerator;