const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// Serve Bootstrap CSS file
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));


// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware for serving static files from the public directory
app.use(express.static('public'));

// Serve custom CSS file
app.use('/styles.css', express.static(path.join(__dirname, 'public/styles.css')));


// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data (tasks)
let tasks = [];

// Routes
app.get('/', (req, res) => {
    res.render('index', { tasks });
});

app.post('/add-task', (req, res) => {
    const { taskName } = req.body;
    tasks.push({ id: tasks.length + 1, name: taskName });
    res.redirect('/');
});

app.get('/edit-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    res.render('edit-task', { task });
});

app.post('/update-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { taskName } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].name = taskName;
    }
    res.redirect('/');
});

app.get('/delete-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
