const express = require("express");
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const { mongoose } = require('./config/db.js');

app.use(express.json());

app.use('/api/employees', require('./routes/api/employeesRoute'));
app.get('/', (req, res) => { 
    res.send('Hello World.');
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


 