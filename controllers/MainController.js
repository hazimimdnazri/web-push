const healthCheck = (req, res) => {
    console.log("Health check from " + req.ip);
    res.status(200).json({ message: 'OK' });
};

module.exports = {
    healthCheck
};