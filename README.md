# Web Push Notification Server

A simple Express.js server that implements web push notifications using the web-push library.

## Description

This project provides a basic implementation of a push notification server that can send notifications to web clients using the Web Push protocol.

## Prerequisites

- Node.js
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:
```bash
PORT=3000
VAPID_PUBLIC_KEY=your_public_key
VAPID_PRIVATE_KEY=your_private_key
```

## Environment Variables

- `PORT`: The port number for the server to listen on
- `VAPID_PUBLIC_KEY`: Your VAPID public key for web push notifications
- `VAPID_PRIVATE_KEY`: Your VAPID private key for web push notifications

## Usage

Start the server:
```bash
npm start
# or
yarn start
```

## API Endpoints

### POST /subscribe
Subscribe to push notifications

**Request Body:**
```json
{
  "endpoint": "...",
  "keys": {
    "p256dh": "...",
    "auth": "..."
  }
}
```

## Dependencies

- express: ^4.21.2
- web-push: ^3.6.7
- cors: ^2.8.5
- body-parser: ^2.2.0

## License

MIT

## Author

Hazimi Md Nazri
