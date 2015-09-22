var dateFormat = require('dateformat');
var fs = require('fs')
var Console = require('console').Console;
var console = new Console(process.stdout); 
var debug = true, info = true, error = true;
module.exports = {
	init : function(options){
		if(typeof options!="undefined"){
			if(options["file"]) {
				var Console = require('console').Console;
				var output = fs.createWriteStream(options["file"])
				console = new Console(output)	
			}
			if(options["mode"]) {
				var mode = options["mode"]
				if(mode.length<=3) {
					debug = false, info = false, error = false;
					for (var i=0; i< mode.length;i++) {
						switch(mode[i]){
							case 'D' : debug = true;
								break;
							case 'I' : info = true;
								break;
							case 'E' : error = true;
								break;
						}
					}
				}
			}
		}
	
	},
	get_date : function(callback) {
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
			if(debug === true)
				module.exports.get_date(function(date){
					console.log(date + "DEBUG: "+ log)
				})
		},
	
	info : function(log) {
			if(info === true)
				module.exports.get_date(function(date){
					console.log(date + "INFO: "+ log)
			})
		},
	error : function(log) {
			if(error === true)
				module.exports.get_date(function(date){
					console.log(date + "ERROR: "+ log)
				})
		}
}

