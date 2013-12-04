/*global exports */

exports.description = 'Create a new app with browserified React.js modules/templates and Stylus CSS. Also includes file-watching & built-in development server';

exports.after = 'You should now install project dependencies with _npm install_.';

exports.warnOn = ['*', '.*'];

exports.template = function (grunt, init, done) {
	init.process({}, [
		init.prompt('name'),
		init.prompt('description'),
		init.prompt('author_name'),
		init.prompt('author_email'),
		init.prompt('author_url')
	], function (err, props) {
		init.copyAndProcess(init.filesToCopy(props), props);
		done();
	});
};