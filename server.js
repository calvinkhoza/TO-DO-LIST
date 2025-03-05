const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Serve static files from the "docs" folder
app.use(express.static(path.join(__dirname, 'docs')));

// specify where views dir is
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Start the server
app.listen(port, () => {
  console.log(`To-Do List app is running at ${port}`);
});
