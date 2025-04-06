const Logger = require('../utils/Logger');

const logger = Logger.getInstance();

class NotificationService {
    constructor() {
        this.webpush = require('web-push');
    }

    async sendNotification(subscription, payload) {
        try {
            await this.webpush.sendNotification(subscription, payload);
        } catch (error) {
            logger.error('Error sending notification:', error);
        }
    }

}

module.exports = new NotificationService();
