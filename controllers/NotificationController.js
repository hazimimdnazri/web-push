const webpush = require('web-push');
const Logger = require('../services/Logger');
const logger = Logger.getInstance();

const subscribe = (req, res) => {
    logger.info("Subscription request received", req.body);

    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({
        title: "Hello World",
        body: "This is your first push notification",
        icon: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
        actions: [
            { action: "open_url", title: "Open URL" },
            { action: "dismiss", title: "Dismiss" }
        ]
    });

    webpush.sendNotification(subscription, payload).catch(console.log);
};

const alert = (req, res) => {
    logger.info("Alert request received");
    const subscription = req.body.subscription;
    logger.info("Alert request received", subscription);
    const payload = JSON.stringify({
        title: req.body.title,
        body: req.body.message,
        icon: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
        actions: [
            { action: "open_url", title: "Open URL" },
            { action: "dismiss", title: "Dismiss" }
        ]
    });

    webpush.sendNotification(subscription, payload).catch(console.log);
    res.status(200).json({
        success: "OK",
        message: "Alert sent"
    });
};

module.exports = {
    subscribe,
    alert
}; 