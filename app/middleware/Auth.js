class Auth {
    constructor() {
    }

    verifyToken(req, res, next) {
        const accept = req.headers.accept;
        if (accept !== process.env.ACCEPT_HEADER) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        next();
    }
}

module.exports = new Auth();
