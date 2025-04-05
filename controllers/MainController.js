const Logger = require('../services/Logger');
const logger = Logger.getInstance();

const healthCheck = (req, res) => {
    logger.info("Health check");
    res.status(200).json({
        status: 'OK',
        message: 'Server is healthy'
    });
};

module.exports = {
    healthCheck
};