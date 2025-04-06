const Logger = require('../utils/Logger');
const NotificationService = require('../services/NotificationService');

const logger = Logger.getInstance();

const subscribe = (req, res) => {
    logger.info("Subscription request received", req.body);

    const subscription = req.body;

    res.status(201).json({
        status: "OK",
        message: "Subscription created"
    });

    NotificationService.sendNotification(subscription, {
        title: "Welcome to Beraturlah!",
        body: "This is your first push notification",
    });
};

const alert = (req, res) => {
    logger.info("Alert request received");

    const subscription = req.body.subscription;

    NotificationService.sendNotification(subscription, {
        title: req.body.title,
        body: req.body.message,
    });

    res.status(200).json({
        success: "OK",
        message: "Alert sent"
    });
};

module.exports = {
    subscribe,
    alert
}; 