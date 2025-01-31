    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const UserModel = require('./models/Users');

    const app = express();

    
    app.use(cors());
    app.use(express.json());

    
    mongoose
    .connect("mongodb://127.0.0.1:27017/shopping", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

    
    app.get('/',(req,res)=>{
        UserModel.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
    })
    
    app.get('/getUser/:id', (req, res)=>{
        const id = req.params.id;
        UserModel.findById({_id:id})
        .then(products => res.json(products))
        .catch(err => res.json(err))
    })
    
    app.put('/updateUser/:id', (req, res) =>{

        const id = req.params.id;
        UserModel.findByIdAndUpdate({_id:id},{
          description: req.body.description,
          category: req.body.category,
          price: req.body.price,
          stock: req.body.stock,
          image: req.body.image
          
        })
        .then(products => res.json(products))
        .catch(err => res.json(err))
    })


    app.delete('/deleteUser/:id', (req,res)=>{
        const id = req.params.id;
        UserModel.findByIdAndDelete({_id:id})
        .then(products => res.json(products))
        .catch(err => res.json(err))
    })
    app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then((product) => {
        console.log("User created:", product);
        res.status(201).json(product);
        })
        .catch((err) => {
        console.error("Error creating user:", err);
        res.status(400).json({ error: "Failed to create user", details: err });
        });
    });

    
    app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
    });
