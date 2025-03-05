const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Serve static files from the "docs" folder
app.use(express.static(path.join(__dirname, 'docs')));

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`To-Do List app is running at http://0.0.0.0:${port}`);
});
