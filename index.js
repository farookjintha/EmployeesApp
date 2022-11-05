require('dotenv').config();
const express = require('express');
const db = require('./db/connect');

//Importing routes;
const employeeRoutes = require('./routes/employees.route');

const app = express();

//connecting database
db();

//To parse JSON objects
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Welcome to my App');
});


//custom middleware
app.use(employeeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
})