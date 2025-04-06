const express = require('express');
const router = express.Router();
const notificationController = require('./app/controllers/NotificationController');
const mainController = require('./app/controllers/MainController');
const auth = require('./app/middleware/Auth');

router.get('/', mainController.healthCheck);

router.use(auth.verifyToken);
router.post('/subscribe', notificationController.subscribe);
router.post('/alert', notificationController.alert);

module.exports = router; 