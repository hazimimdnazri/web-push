const express = require('express');
const router = express.Router();
const notificationController = require('./app/controllers/NotificationController');
const mainController = require('./app/controllers/MainController');
const auth = require('./app/middleware/Auth');

router.get('/', mainController.healthCheck);
router.post('/subscribe', notificationController.subscribe);
router.post('/alert', auth.verifyToken, notificationController.alert);

module.exports = router; 