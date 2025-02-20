const mongoose=require('mongoose');
require('dotenv').config();

// define the mongoDB connection URL
//const mongoURL='mongodb://localhost:27017/hotels'
//const mongoURL='mongodb+srv://abhashtiwari12:%40bhash2002@cluster-hotels.kzyug.mongodb.net/';
const mongoURL=process.env.mongoURL;

mongoose.connect(mongoURL,{
    
     useUnifiedTopology:true

})

// Get the default Connection
//Mongoose maintains a default connection object representing the Mongoose Connection
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to mongodb server');

});
db.on('error',(err)=>{
    console.error('connection error :',err);

});
db.on('disconnected',()=>{
    console.log('server disconnected');

});

//Export the databse connection
module.exports=db
