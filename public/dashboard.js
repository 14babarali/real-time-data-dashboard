// Connect to the server using Socket.IO
const socket = io();

// Get the dashboard element
const dashboard = document.getElementById('dashboard');

// Listen for data updates from the server
socket.on('dataUpdate', (data) => {
    // Create a new data item element
    const div = document.createElement('div');
    div.classList.add('data-item', 'bg-light');
    div.innerHTML = `<strong>Timestamp:</strong> ${data.timestamp} <br> <strong>Value:</strong> ${data.value}`;
    
    // Append the new item to the dashboard
    dashboard.prepend(div); // Add new data at the top
});
