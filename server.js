const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"lms"
});

// TEACHERS
app.get("/api/teachers",(req,res)=>{
  db.query("SELECT * FROM teachers",(err,result)=>{
    res.json(result);
  });
});

// STUDENTS
app.post("/api/student",(req,res)=>{
  const {name} = req.body;
  db.query("INSERT INTO students (name) VALUES (?)",[name]);
  res.json({msg:"added"});
});

// ASSIGNMENT
app.post("/api/assignment",(req,res)=>{
  const {title} = req.body;
  db.query("INSERT INTO assignments (title) VALUES (?)",[title]);
  res.json({msg:"done"});
});

app.listen(5000,()=>console.log("Server running"));