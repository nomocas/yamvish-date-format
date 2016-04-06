//___________________________________ yamvish bridge
(function() {
	'use strict';
	var y = require('yamvish'),
		dateFormat = require('nomocas-utils/lib/date-format');

	y.dateFormat = dateFormat;
	y.Filter.prototype.date = function(format, utc) {
		this._queue.push(function(input) {
			if (!input)
				return '';
			return dateFormat(new Date(input), format, utc);
		});
		return this;
	};
	module.exports = dateFormat;
})();
