const express = require('express');
const router = express.Router();
const notificationController = require('./controllers/NotificationController');

router.post('/subscribe', notificationController.subscribe);
router.post('/alert', notificationController.alert);

module.exports = router; 