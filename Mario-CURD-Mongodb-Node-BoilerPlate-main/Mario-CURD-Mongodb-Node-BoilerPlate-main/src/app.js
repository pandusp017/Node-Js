const bodyParser = require("body-parser");
const express = require('express')
const {findById} = require('./models/marioChar');
const app = express()
const marioModel = require('./models/marioChar');
// let mongoose = require('mongoose')
// mongoose.connect('mongodb:/localhost:27017/mario')
// const User =  require('./models/marioChar');


// Middlewares


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded());
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
// app.get("/",(req,res)=>{
//     res.send('Hello world')
// })

app.get('/mario',async(req,res)=>{
    const results= await marioModel.find();
    res.json(results)
});
app.get('/mario/:id', async(req,res)=>{
    try{
        const results = await marioModel.findById(req.params.id)
        res.json(results)
    }catch{
        res.status(400).json({message:"Character id not found"})
    }
});
app.post("/mario",async(req,res)=>{
    try{
        const data = new marioModel(req.body);
        await data.save()
        res.status(201).json(data);
    }catch{
        res.status(400).json({message:"either name or weight is missing"})
    }
})

// app.patch("/mario/:id", async(req,res)=>{
//     try{
//         const id = req.params.id
//         const data = req.body;
//         await marioModel.findByIdAndUpdate(id,data);
//         const result = await marioModel.findById(id);
//         console.log(result);
//         res.json(result)

//     }catch{
//         res.status(400).json({message:"error"})
//     }
// })
// app.delete("/mario/:id",async(req,res)=>{
//     try{
//         await marioModel.findByIdAndDelete(req.params.id);
//         res.status(200).json({message:'character deleted'})
//     }catch{
//         res.status(400).json({message:'Char id does not exit'})
//     }
// })
module.exports = app;