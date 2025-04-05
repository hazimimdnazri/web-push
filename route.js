const express = require('express');
const router = express.Router();
const notificationController = require('./controllers/NotificationController');
const mainController = require('./controllers/MainController');

router.get('/', mainController.healthCheck);
router.post('/subscribe', notificationController.subscribe);
router.post('/alert', notificationController.alert);

module.exports = router; 