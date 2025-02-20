const express=require('express')// batana ki express chaiyee
const app=express() 
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT||3000

const person=require('./models/person');
const menu=require('./models/menu');

app.get('/',function(req,res){ //menu card 
    res.send('Hello World and welcome to my hotel')
})

//import the router files 
const personRoutes=require('./routes/personRoutes');
console.log('loading menuRoutes');
const menuRoutes = require("./routes/menuRoutes"); // Ensure exact match
console.log("menuRoutes loaded successfully");


// use the routers
app.use('/person',personRoutes);
app.use('/menu',menuRoutes)



app.listen(PORT,()=>{
    console.log('listening on port 3k')
})// 3k port hai(local host ka)