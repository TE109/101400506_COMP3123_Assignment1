express = require("express");
const app = express();

const port = process.env.PORT || 3000;


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