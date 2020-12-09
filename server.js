// Setup empty JS object to act as endpoint for all routes
projectData = {};
const key="bcab5ccf97bb4cbb4ba9a2d407d594f6";

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=8000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});


app.get("/data",function(req,res){
    res.send(projectData);
    });


app.post("/adddata",function(req,res){
    projectData.temp=req.body.temp;
    projectData.data=req.body.data;
    projectData.content=req.body.content;
    console.log(projectData);
    });
        