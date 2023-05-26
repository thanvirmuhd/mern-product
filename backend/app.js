const express=require('express')// to build backend quickly
const app=express();// insance of express
const cors=require('cors');//for cross orgin policy
app.use(cors());//means use thiscross package
const PORT=7865
app.use(express.json());// to parse json data
app.use(express.urlencoded({extended:true}))//to parse url encoded data
app.use(express.static('public'))//to serve static files
require('./dB')//mongoose db connection folder is called here hen server starts up
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})