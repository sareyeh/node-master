const express = require("express");
const router = express.Router();

const Employee = require("../../models/Employee");
  

 function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}



router.get('/', async(req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const employee = await Employee.findById(req.params.id);
        res.json(employee);
    } catch (err) {
        res.json({ message: err });
    }
}); 

router.post('/', async(req, res) => {

    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        birthday: new Date(req.body.birthday),
        age: calculate_age(new Date(req.body.birthday)),
        department: req.body.department,
        gender: req.body.gender
    });
 
 
    try {
        const saveEmployee = await employee.save();
        res.json(saveEmployee);
    } catch (err) {
        res.json({message: err });
    }
});

router.put('/:id', async (req, res) => {
  
    var emp = {
        name: req.body.name,
        email: req.body.email,
        birthday: new Date(req.body.birthday),
        age: calculate_age(new Date(req.body.birthday)),
        department: req.body.department,
        gender: req.body.gender    
    };
  
    try{
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true });
        res.json(updateEmployee);
    } catch (err) {
        res.json({ message: err });
    }

});


router.delete('/:id', async (req, res) => {
    try{
        const removeEmployee = await Employee.remove({_id: req.params.id});
        res.json(removeEmployee);
    } catch (err) {
        res.json({ message: err });
    }
});

 
module.exports = router;