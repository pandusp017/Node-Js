const express = require('express')
const app = express();
const port =  8081;
app.get('/welcome', (req,res)=>{
    res.send("Welcome to Dominos!")
})
app.get('/contact',(req,res)=>{
   res.send({  
         phone: '18602100000', 
         email: 'guestcaredominos@jublfood.com' 
   })
})
app.get('*',(req,res)=>{
    res.send("Error 404 not found")
})
app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})