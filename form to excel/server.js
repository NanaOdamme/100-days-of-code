const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Serve the HTML file containing the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { firstName, lastName, middleName, email } = req.body;

  // Format the data
  const formData = `First Name: ${firstName}\nLast Name: ${lastName}\nMiddle Name: ${middleName}\nEmail: ${email}\n\n`;

  // Append the data to the file
  fs.appendFile('formData.txt', formData, (err) => {
    if (err) throw err;
    console.log('Form data saved!');
  });

  // Send a response back to the client
  res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
