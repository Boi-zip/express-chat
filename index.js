const express = require('express');
const app = express();
const bodyParser = require('body-parser');


let messages = [];

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// Serve the index.ejs file at the root route
app.get('/', (req, res) => {
    res.render('index', { messages });
});

// Handle form submissions
app.post('/send', (req, res) => {
    // Get the message from the request body
 const { message, name } = req.body;
    messages.push({ message, name });

    // Redirect the user back to the chat page
    res.redirect('/');
});
app.get('/messages', (req, res) => {
    res.json(messages);
});


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
