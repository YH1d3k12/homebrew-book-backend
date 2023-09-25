const express = require('express'); // Import the Express library
const cors = require('cors'); // Import the cors package
const magic_school = require('./routes/magic_school.js');

const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Choose the port for your server

//Middleware which allows the request of json files
app.use(express.json());
// Enable CORS for all routes
// This allows other ports to send requests
app.use(cors());

app.use('/magic_school', magic_school);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});