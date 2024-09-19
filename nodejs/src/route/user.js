const { Router } = require('express');
const mongoose = require('mongoose');
const UserRoute = Router();
const bcrypt = require('bcrypt')
const saltRounds = 10;

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const User = mongoose.model('User', {
    fullName: String,
    dateOfBirth: String,
    address: String,
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'male'
    },
    phoneNumber: String,
    email: String,
    password: String,
    photo: String
});

// Get all users
UserRoute.get('/users', async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: 'Error fetching users'});
    }
});

// Get a user by ID
UserRoute.get('/users/:id', async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        if (!data) {
            return res.status(404).send({ msg: 'User not found'});
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: 'Error fetching user by ID'});
    }
});

// Register a new user
UserRoute.post('/register', async (req, res) => {
    try {
        // to check existing email
        const emailExists = await User.exists({email:req.body.email})
        if(emailExists)
        {
            return res.status(404).send({msg:'email already exist'})
        }
        // to encrypt password 
        req.body.password= bcrypt(req.body.password, saltRounds) 
        // create new users
        const newUser = await User.create(req.body);
        res.status(201).send({ msg: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).send({ msg: 'Error registering user' });
    }
});
UserRoute.post('/login', async (req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if (!user) {
            return res.status(404).send({ msg: 'User not found' });
        }
        const isMatched = await bcrypt.compare(req.body.password, user.password);
        if(isMatched){
         const  token = jwt.sign({ email: req.body.email }, 'shhhhh');
         res.send({user,token,isLoggedIn: true})
        }else{
         res.send({msg: 'incorrect password'})
        }
    } catch (error) {
        res.status(500).send({ msg: 'something went worng'});
    }
})
// Update a user
UserRoute.put('/users/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!data) {
            return res.status(404).send({ msg: 'User not found' });
        }
        res.status(200).send({ msg: `${req.params.id} user updated successfully`, data });
    } catch (error) {
        res.status(500).send({ msg: 'Error updating user'});
    }
});

// Delete a user
UserRoute.delete('/users/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).send({ msg: `${req.params.id} User not found` });
        }
        res.status(200).send({ msg: `${req.params.id} user deleted successfully` });
    } catch (error) {
        res.status(500).send({ msg: 'Error deleting user'});
    }
});

module.exports = UserRoute;
