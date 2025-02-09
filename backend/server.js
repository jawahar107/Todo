const express= require('express');
const mongoose= require('mongoose')
const cors= require('cors')
const bodyParser= require('body-parser')
const Todo = require('./modules/todoschema')

//connect to express
const app=express()

//connect to mongoDB
const dbURI='mongodb+srv://Jawa:Jawa12@cluster0.u5kbu.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0'
mongoose
.connect(dbURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(3001,()=>{
        console.log('server is connected succesfully connected to port 3001 and MongoDB is connected')
    })
})
.catch((error)=>{
    console.log('server and MongoDb failed to connect')
})

//middleware
app.use(cors())
app.use(bodyParser.json())
  
//Routes
// GET tasks
app.get('/tasks')

//Create //Post
//Read // Get
//Update // Put 
// Delete // DELETE
