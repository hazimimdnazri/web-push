const Logger = require('../services/Logger');
const logger = Logger.getInstance();

const healthCheck = (req, res) => {
    logger.info("Health check from " + req.socket.remoteAddress);
    res.status(200).json({ message: 'OK' });
};

module.exports = {
    healthCheck
};