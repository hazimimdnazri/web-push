class NotificationService {
    constructor() {
        this.webpush = require('web-push');
    }

    async sendNotification(subscription, payload) {
        try {
            await this.webpush.sendNotification(subscription, payload);
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    }

}

module.exports = new NotificationService();
