express = require("express");
const app = express();
let userModel = require("./Schemas/User")

const port = process.env.PORT || 3000;


app.get('/',(req,res) => {
    res.send("Test");
})

// Allow user to create new account
// NOT WORKING YET 
app.post('/api/v1/user/signup', async(req,res) => {
    const user = new userModel(req.body)
    try{
        await user.save();
        res.send(user)
    } catch(err) {
        res.status(500)
        res.send(err);
    }
    res.status(201);
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