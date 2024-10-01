express = require("express");
const app = express();
const mongoose = require('mongoose');
const crypto = require('crypto');
const { UUID } = require('bson');
let userModel = require("./Schemas/User");


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = "mongodb+srv://admin:pass@comp3123cluster.arhm6.mongodb.net/?retryWrites=true&w=majority&appName=Comp3123Cluster";
mongoose.connect(uri,{
    pkFactory: { createPk: () =>  new UUID().toBinary() }
})

app.get('/',(req,res) => {
    res.send("Test");
})

// Allow user to create new account
app.post('/api/v1/user/signup', async (req,res) => {
    userModel.init();
    id = new mongoose.Types.ObjectId();
    const user = new userModel({
        _id: id,
        username : req.body.username,
        email : req.body.email,
        password : crypto.createHash('md5').update(req.body.password).digest('hex'),
    })
    try{
        await user.save()
        res.status(201).send("User created Sucsesfully User Id: " + id)
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