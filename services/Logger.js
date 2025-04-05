class Logger {
    constructor() {
        this.serviceName = 'Push Notification Server';
        this.logLevels = ['error', 'warn', 'info', 'debug'];
        this.currentLevel = process.env.NODE_ENV === 'production' ? 'info' : 'debug';
    }

    #formatMessage(level, message, meta = {}) {
        return `${this.dateFormat()} [${level.toUpperCase()}]: ${message}`;
    }

    #shouldLog(level) {
        return this.logLevels.indexOf(level) <= this.logLevels.indexOf(this.currentLevel);
    }

    log(level, message, meta) {
        if (!this.#shouldLog(level)) return;
        const formatted = this.#formatMessage(level, message, meta);
        console.log(formatted);
    }

    info(message, meta) {
        this.log('info', message, meta);
    }

    warn(message, meta) {
        this.log('warn', message, meta);
    }

    error(message, meta) {
        this.log('error', message, meta);
    }

    debug(message, meta) {
        this.log('debug', message, meta);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }

    dateFormat() {
        return new Date(Date.now() + 28800000).toISOString().replace('T', ' ').replace('Z', '').slice(0, -4);
    }
}

module.exports = Logger;