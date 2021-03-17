const express = require('express') //express lib required for server operations
require('dotenv').config()//dotenv for envoinment variables


const port = process.env.PORT || 3000

const app = express()//instansiate server

app.get('/', (req,res)=>{
    res.send('hello')
})

app.listen(port , ()=>{
    console.log("Web server up and running at port "+ port)
})
