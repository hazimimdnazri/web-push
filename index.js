const express = require('express');
const webpush = require('web-push');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, "client")))

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const publicVapidKey = process.env.VAPID_PUBLIC_KEY;
const privateVapidKey = process.env.VAPID_PRIVATE_KEY;

webpush.setVapidDetails("mailto:zimy@projeklah.com", publicVapidKey, privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });
    webpush.sendNotification(subscription, payload).catch(console.log);
})

app.listen(process.env.PORT, () => {
    console.log("Server started on port " + process.env.PORT);
})