const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const routes = require('./route');

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

webpush.setVapidDetails("mailto:zimy@projeklah.com", publicVapidKey, privateVapidKey);

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
})