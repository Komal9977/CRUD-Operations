'use strict';
var dbConn = require('./../../config/db.config');

//Emp object creation
var Employee = function(employee){
    this.first_name     = employee.first_name;
    this.last_name      = employee.last_name;
    this.email          = employee.email;

};
//CREATE
Employee.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
//READ
Employee.findById = function (id, result) {
    dbConn.query("Select * from employees where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
//FINDALL
Employee.findAll = function (result) {
    dbConn.query("Select * from employees", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });   
};
//UPDATE
Employee.update = function(id, employee, result){
  dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?, WHERE id = ?", [employee.first_name,employee.last_name,employee.email, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
//DELETE
Employee.delete = function(id, result){
     dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Employee;