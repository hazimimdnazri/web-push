const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const routes = require('./route');
const Logger = require('./services/Logger');
const logger = Logger.getInstance();

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const publicVapidKey = process.env.VAPID_PUBLIC_KEY;
const privateVapidKey = process.env.VAPID_PRIVATE_KEY;
const vapidSubject = process.env.VAPID_SUBJECT;

webpush.setVapidDetails(vapidSubject, publicVapidKey, privateVapidKey);

app.use('/', routes);

app.listen(process.env.PORT, () => {
    logger.info("Server started on port " + process.env.PORT);
})