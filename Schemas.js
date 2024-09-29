const mongoose = require('mongoose');

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

const User = mongoose.model("User",UserSchema);
const Employee = mongoose.model("Employee",EmployeeSchema);
module.exports = User,Employee;