const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'ee4a8dd93bf1a6f6f73ac6167a98da599f680fce0c0d78b7c27a8240f28a57b9',
    resave: false,
    saveUninitialized: true
  }));


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


app.get('/register', (req, res) => {
    res.render('register', { title: 'Register', layout: false });
  });

  app.get('/login', (req, res) => {
    res.render('login', { title: 'Login', layout: false });
  });

  app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO admins (username, password) VALUES (?, ?)';
    connection.query(sql, [username, password], (err, result) => {
      if (err) throw err;
      res.send('Admin registered successfully');
    });
  });

  app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM admins WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        // Authentication successful
        req.session.username = username;
        req.session.authenticated = true; // Set session variable
        res.redirect('/dashboard');
      } else {
        // Authentication failed
        res.send('Invalid username or password');
      }
    });
  });

  app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect('/login');
    });
  });

  // Define requireAuth middleware
function requireAuth(req, res, next) {
    if (req.session && req.session.authenticated) {
      // If the user is authenticated, proceed to the next middleware/route handler
      next();
    } else {
      // If not authenticated, redirect to the login page or handle unauthorized access
      res.redirect('/login'); // Redirect to the login page
    }
  }

// render dashboard
app.get('/dashboard', requireAuth, (req, res) => {
    const { username } = req.session; // Assuming username is stored in the session
    console.log(username); 
    res.render('dashboard', {title:'dashboard', username });
  });

  
// Route to render employee form
app.get('/employees/new', (req, res) => {
    connection.query('SELECT * FROM departments', (error, results) => {
        if (error) {
            console.error('Error fetching departments:', error);
            res.send('Error fetching departments data.');
            return;
        }
        res.render('employeeForm', { title:'Add Employee', departments: results });
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
        res.render('employees', { title: 'Employess', employees: results });
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

            res.render('editEmployee',  { title: 'editDepartment', employee: results[0], departments: deptResults });
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


// GET route to fetch employee names and status from MySQL employees table
app.get('/employeeStatus', (req, res) => {
    connection.query('SELECT CONCAT(firstName, " ", IFNULL(middleName, ""), " ", lastName) AS fullName, status, employeeNumber FROM employees', (error, results) => {
        if (error) {
            console.error('Error fetching employee names:', error);
            res.status(500).send('Error fetching employee names: ' + error.message);
            return;
        }
        console.log('Employee names fetched:', results);
        res.render('employeeStatus', {title:'status' ,employees: results });
    });
});

// POST route to update employee status
app.post('/updateStatus/:employeeNumber', (req, res) => {
    const employeeNumber = req.params.employeeNumber;
    const newStatus = req.body.status === '1' ? 1 : 0;

    connection.query('UPDATE employees SET status = ? WHERE employeeNumber = ?', [newStatus, employeeNumber], (error, results) => {
        if (error) {
            console.error('Error updating status:', error);
            res.status(500).send('Error updating status: ' + error.message);
            return;
        }
        console.log('Status updated for employee:', employeeNumber);
        res.redirect('/employeeStatus'); // Redirect to the employee list page
    });
});

// Function to fetch employees' full names from the database
function fetchEmployeesFromDatabase(callback) {
    connection.query('SELECT CONCAT(lastName, ", ", IFNULL(firstName, ""), " ", IFNULL(middleName, "")) AS fullName FROM employees', (error, results) => {
        if (error) {
            console.error('Error fetching employees:', error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// GET route to render salary setup page
app.get('/salarySetup', (req, res) => {
    fetchEmployeesFromDatabase((error, employees) => {
        if (error) {
            res.status(500).send('Error fetching employees from database');
        } else {
            res.render('salarySetup', {title:'salaries', employees });
        }
    });
});



// POST route to add new salary
app.post('/addSalary', (req, res) => {
    const { employeeName, salary, bonus, deductions, taxes } = req.body;
    
    // Insert the salary data into the database
    // You would need to modify this part to fit your database schema
    connection.query('INSERT INTO salaries (employeeName, salary, bonus, deductions, taxes) VALUES (?, ?, ?, ?, ?)', 
        [employeeName, salary, bonus, deductions, taxes], 
        (error, results) => {
            if (error) {
                console.error('Error adding salary:', error);
                res.status(500).send('Error adding salary: ' + error.message);
                return;
            }
            console.log('Salary added:', results);
            res.redirect('/salarySetup'); // Redirect back to the salary setup page
        }
    );
});

// POST route to edit existing salary
app.post('/editSalary', (req, res) => {
    const { employeeName, newSalary, newBonus, newDeductions, newTaxes } = req.body;
    
    // Update the salary data in the database based on employee name
    // You would need to modify this part to fit your database schema
    connection.query('UPDATE salaries SET salary = ?, bonus = ?, deductions = ?, taxes = ? WHERE employeeName = ?', 
        [newSalary, newBonus, newDeductions, newTaxes, employeeName], 
        (error, results) => {
            if (error) {
                console.error('Error updating salary:', error);
                res.status(500).send('Error updating salary: ' + error.message);
                return;
            }
            console.log('Salary updated:', results);
            res.redirect('/salarySetup'); // Redirect back to the salary setup page
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
        res.render('editDepartment', { title: 'editDepartment', department: results[0] });
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
        res.render('departments', { title:'Departments', departments: results });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

