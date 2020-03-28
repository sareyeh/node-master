const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: { type: String, required: true },    
    birthday: { type: Date, default: Date.now },
    age: { type: Number, default: 0},
    email: { type: String, required: true, unique: true,  lowercase: true },
    department: { type: String },
    gender: { type: String }
    
});


module.exports = mongoose.model('Employees', EmployeeSchema);