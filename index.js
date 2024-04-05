const express = require('express')  
const cors = require('cors')
require('dotenv').config() 

const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
              
//express app           
const app = express() 

app.use(cors())
//middleware 
app.use(express.json())

app.use((req,res,next)=>{ 
    console.log(req.path, req.method)
    next()
})


//routes                 
app.use('/api/workout',workoutRoutes) 


//connect to db 
mongoose.connect(process.env.MONGO_URI) 
.then(()=>{  
   //listen for request    
app.listen(process.env.PORT, ()=>{  
    console.log("connected to Db &listening in port 2000" , process.env.PORT)
}) 
}) 
.catch((error)=>{ 
    console.log(error)
})

