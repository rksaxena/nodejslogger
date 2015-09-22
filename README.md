# nodejslogger
A logging module for node.js with three levels of logs (DEBUG, INFO, ERROR)

INSTALL:
npm install nodejslogger --save

USAGE:
The logger can be instantiated and used to print logs to console/output-file based on different options.
var logger = require('nodejslogger')
logger.debug("Debug logs")
logger.info("Info logs")
logger.error("Error logs")

OPTIONS:
The logger can be instantiated and an init function can be called to initialize the logger. Currently there are two fields i.e. "file" and "mode" which can be passed as parameter.
E.g.
	var logger = require('nodejslogger')
	logger.init({"file":"output-file", "mode":"DIE"})

MODES:
There are three levels of logging modes:
	'D' : Debug
	'I' : Info
	'E' : Error
By default all the three modes will be set to true. To enable any specific mode, set the mode parameter accordingly
E.g.
	logger.init({"mode":"E"}) #Enable only error logs

OUTPUT:
The current output format is "[YYYYMMDD, HH:MM:SS] <MODE>: Logs"
[20150922,14:22:00] DEBUG: Debug logs
[20150922,14:22:00] ERROR: Error logs
