const express = require('express');
const mysql = require('mysql');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mylove4exo*',
    database: 'payroll'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Route to render employee form
app.get('/employees/new', (req, res) => {
    connection.query('SELECT * FROM departments', (error, results) => {
        if (error) {
            console.error('Error fetching departments:', error);
            res.send('Error fetching departments data.');
            return;
        }
        res.render('employeeForm', { departments: results });
    });
});

// Handle form submission to add new employee
app.post('/employees', (req, res) => {
    const { firstName, lastName, middleName, address, department, email, status, employeeNumber } = req.body;
    
    // Convert status to integer (0 for false, 1 for true)
    const statusInt = status === 'true' ? 1 : 0;
    
    const employeeData = { firstName, lastName, middleName, address, department, email, status: statusInt, employeeNumber };

    connection.query('INSERT INTO employees SET ?', employeeData, (error, results) => {
        if (error) {
            console.error('Error inserting employee:', error);
            res.status(500).send('Error inserting employee data: ' + error.message);
            return;
        }
        console.log('Employee added:', results);
        res.redirect('/employees');
    });
});


// Route to render the list of employees
app.get('/employees', (req, res) => {
    const query = `
        SELECT employees.*, departments.name AS departmentName
        FROM employees
        JOIN departments ON employees.department = departments.id
    `;

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching employees:', error);
            res.send('Error fetching employees data.');
            return;
        }
        res.render('employees', { employees: results });
    });
});

// Route to render edit employee form
app.get('/employees/:id/edit', (req, res) => {
    const { id } = req.params;

    connection.query('SELECT * FROM employees WHERE id = ?', id, (error, results) => {
        if (error || results.length === 0) {
            console.error('Error fetching employee for edit:', error);
            res.send('Employee not found.');
            return;
        }

        // Fetch departments for dropdown
        connection.query('SELECT * FROM departments', (deptError, deptResults) => {
            if (deptError) {
                console.error('Error fetching departments:', deptError);
                res.send('Error fetching departments data.');
                return;
            }

            res.render('editEmployee', { employee: results[0], departments: deptResults });
        });
    });
});


// Route to handle form submission for updating employee details
app.post('/employees/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, middleName, address, email, status, employeeNumber } = req.body;

    // Convert status to integer (0 or 1)
    const statusInt = status === 'true' ? 1 : 0;

    connection.query(
        'UPDATE employees SET firstName = ?, lastName = ?, middleName = ?, address = ?, email = ?, status = ?, employeeNumber = ? WHERE id = ?', 
        [firstName, lastName, middleName, address, email, statusInt, employeeNumber, id], 
        (error, results) => {
            if (error) {
                console.error('Error updating employee:', error);
                res.status(500).send('Error updating employee.');
                return;
            }
            console.log('Employee updated:', results);
            res.redirect('/employees');
        }
    );
});

// departments
app.post('/departments', (req, res) => {
    const { departmentName } = req.body;

    connection.query('INSERT INTO departments (name) VALUES (?)', [departmentName], (error, results) => {
        if (error) {
            console.error('Error adding department:', error);
            res.send('Error adding department.');
            return;
        }
        console.log('Department added:', results);
        res.redirect('/departments');
    });
});

// Route to render department edit form
app.get('/departments/:id/edit', (req, res) => {
    const { id } = req.params;

    connection.query('SELECT * FROM departments WHERE id = ?', id, (error, results) => {
        if (error || results.length === 0) {
            console.error('Error fetching department for edit:', error);
            res.send('Department not found.');
            return;
        }
        res.render('editDepartment', { department: results[0] });
    });
});

// Route to handle department update (PUT request)
app.put('/departments/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    connection.query('UPDATE departments SET name = ? WHERE id = ?', [name, id], (error, results) => {
        if (error) {
            console.error('Error updating department:', error);
            res.send('Error updating department.');
            return;
        }
        console.log('Department updated:', results);
        res.redirect('/departments');
    });
});

// Route to handle department deletion (DELETE request)
app.delete('/departments/:id', (req, res) => {
    const { id } = req.params;

    connection.query('DELETE FROM departments WHERE id = ?', id, (error, results) => {
        if (error) {
            console.error('Error deleting department:', error);
            res.send('Error deleting department.');
            return;
        }
        console.log('Department deleted:', results);
        res.redirect('/departments');
    });
});

// Route to render departments view and fetch existing departments
app.get('/departments', (req, res) => {
    connection.query('SELECT * FROM departments', (error, results) => {
        if (error) {
            console.error('Error fetching departments:', error);
            res.send('Error fetching departments data.');
            return;
        }
        res.render('departments', { departments: results });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

