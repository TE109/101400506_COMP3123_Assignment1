express = require("express");
const app = express();
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');
let userModel = require("./Schemas/User");


const port = process.env.PORT || 3000;

const uri = "mongodb+srv://admin:pass@comp3123cluster.arhm6.mongodb.net/?retryWrites=true&w=majority&appName=Comp3123Cluster";
mongoose.connect(uri,{

})

app.get('/',(req,res) => {
    res.send("Test");
})

// Allow user to create new account
app.post('/api/v1/user/signup', async (req,res) => {
    // const objectId = new ObjectID();
    const user = new userModel(req.body)
    const data = req.body;
    console.log(data);
    try{
        await user.save()
        console.log(req.body);
        res.status(201).send("Student Record Saved")
    }catch(err){
        console.log("ERROR: " + err)
        res.status(500).send(err)
    }
    
})

// Allow user to access the system
app.post('/api/v1/user/login',(req,res) => {
    res.status(200);
})

// User can get all employee list
app.get('/api/v1/emp/employees',(req,res) => {
    res.status(200);
})


// User can create new employee
app.post('/api/v1/emp/employees',(req,res) => {
    res.status(201);
})

// User can get employee details by employee id
app.get('/api/v1/emp/employees/{eid}',(req,res) => {
    res.status(200);
})


// User can update employee details
app.put('/api/v1/emp/employees/{eid}',(req,res) => {
    res.status(200);
})

// User can delete employee by employee id
app.delete('/api/v1/emp/employees/{eid}',(req,res) => {
    res.status(204);
})

app.listen(port, () => {
    
})