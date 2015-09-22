var dateFormat = require('dateformat');
module.exports = {
	get_date : function(callback) {
			//var now = new Date();
			//callback(dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"))
			var date = new Date();

			var hour = date.getHours();
			hour = (hour < 10 ? "0" : "") + hour;

			var min  = date.getMinutes();
			min = (min < 10 ? "0" : "") + min;

			var sec  = date.getSeconds();
			sec = (sec < 10 ? "0" : "") + sec;

			var year = date.getFullYear();

			var month = date.getMonth() + 1;
			month = (month < 10 ? "0" : "") + month;

			var day  = date.getDate();
			day = (day < 10 ? "0" : "") + day;

			callback("[" + year + month + day + "," + hour + ":" + min + ":" + sec+ "] ");	
		},
	debug : function(log) {
			module.exports.get_date(function(date){
				console.log(date + "DEBUG: "+ log)
			})
		},
	
	info : function(log) {
			module.exports.get_date(function(date){
				console.log(date + "INFO: "+ log)
			})
		},
	error : function(log) {
			module.exports.get_date(function(date){
				console.log(date + "ERROR: "+ log)
			})
		}
}

