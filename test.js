var logger = require('./index.js')
var logger1 = require('./index.js')
logger.init({"mode": "DE"})

logger.debug("Debug logs")
logger.info("Info logs")
logger.error("Error logs")

logger1.init({"file" : "test_log.log", "mode" : "DIE"})
logger1.debug("Debug logs")
logger1.info("Info logs")
logger1.error("Error logs")
