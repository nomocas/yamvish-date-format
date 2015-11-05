//___________________________________ yamvish bridge
(function() {
	'use strict';
	var y = require('yamvish'),
		dateFormat = require('./lib/date-format');

	y.dateFormat = dateFormat;
	y.Filter.prototype.date = function(format, utc) {
		this._queue.push(function(input) {
			return dateFormat(new Date(input), format, utc);
		});
		return this;
	};
	module.exports = dateFormat;
})();
