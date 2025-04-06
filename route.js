const express = require('express');
const router = express.Router();
const notificationController = require('./app/controllers/NotificationController');
const mainController = require('./app/controllers/MainController');

router.get('/', mainController.healthCheck);
router.post('/subscribe', notificationController.subscribe);
router.post('/alert', notificationController.alert);

module.exports = router; 