express = require("express");
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;

const UserSchema = mongoose.Schema(
    {
        "_id": ObjectId,
        "username": String,
        "email": String,
        "password": String, // This should be hashed
        "created_at": Date,
        "updated_at": Date
       }
);

const EmployeeSchema = mongoose.Schema(
    {
        "_id": ObjectId,
        "first_name": String,
        "last_name": String,
        "email": String,
        "position": String,
        "salary": Number,
        "date_of_joining": Date,
        "department": String,
        "created_at": Date,
        "updated_at": Date
       }       
)

app.get('/',(req,res) => {
    res.send("Test");
})


app.post('/api/v1/user/signup',(req,res) => {
    res.status(201);
})



app.post('/api/v1/user/login',(req,res) => {
    res.status(200);
})



app.get('/api/v1/emp/employees',(req,res) => {
    res.status(200);
})



app.post('/api/v1/emp/employees',(req,res) => {
    res.status(201);
})


app.get('/api/v1/emp/employees/{eid}',(req,res) => {
    res.status(200);
})



app.put('/api/v1/emp/employees/{eid}',(req,res) => {
    res.status(200);
})


app.delete('/api/v1/emp/employees/{eid}',(req,res) => {
    res.status(204);
})

app.listen(port, () => {
    
})