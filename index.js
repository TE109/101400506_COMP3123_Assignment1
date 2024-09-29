express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("Test");
})
app.listen(port, () =>{
    // console.log("http://127.0.0.1:3000/");
});