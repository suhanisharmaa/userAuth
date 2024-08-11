const express = require('express');
const app = express();
const port = 8000;
const connectDB = require('./db/connectionDB.js');
const User = require('./db/user.js')
const cors = require('cors')

//Middleware for parsing json
app.use(express.json());
//Middleware for ennabling CORS
app.use(cors());

//Registration
app.post('/register',async(req,res) => {
    try{
        const {username,password} = req.body;
        console.log(req.body);
        const user = new User({username,password})
        await user.save(); //saved to mongodb
        res.status(201).json({"message":"user added successfully"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Server error" });
    }
})

app.post('/login',async(req,res) => {
    try{
        const{username,password} = req.body;
        console.log(req.body);
        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({error:"Invalid username or password"});
        }
        if(user.password !== password){
            return res.status(401).json({error:"Invalid password"});
        }
        res.status(200).json({"message":"Login successful"})
    }
    catch(error){
        res.status(500).json({error:"Login failed"})
    }
})

connectDB();

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})