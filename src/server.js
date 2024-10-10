const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

// Initialize Express app
const app = express();
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Simulate data updates every 2 seconds
setInterval(() => {
    const data = {
        timestamp: new Date().toLocaleTimeString(),
        value: Math.floor(Math.random() * 100) // Random value between 0-99
    };
    // Emit the new data to all connected clients
    io.emit('dataUpdate', data);
}, 2000);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
