var path = require('path');
module.exports.generate = function(generator, dir, newFile, includeAngular) {
	var indexFile = generator.readFileAsString(path.join(generator.sourceRoot(), dir + '.js'));
	var includes = [];
	if(includeAngular) {
		includes.push('angular');
	}
	generator.dest.recurse(dir, function(abspath, rootdir, subdir, filename) {
		if (filename !== dir + '.js' && filename.replace('.js','') != newFile) {
			includes.push(dir + '/' + filename.replace('.js', ''));
		}
	});
	
	includes.push(dir+'/'+newFile);
	indexFile = indexFile.replace('_INCLUDES_', includes.map(function(val) {
		return "'" + val + "'";
	}).join(',\n\t\t'));
	generator.write(dir + '/' + dir + '.js', indexFile);

};