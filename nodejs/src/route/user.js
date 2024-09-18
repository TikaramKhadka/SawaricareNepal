const { Router } = require('express');
const mongoose = require('mongoose');
const UserRoute = Router();

mongoose.connect('mongodb://localhost:27017/mydb', 
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
        res.status(500).send({ msg: 'Error fetching users', error });
    }
});

// Get a user by ID
UserRoute.get('/users/:id', async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        if (!data) {
            return res.status(404).send({ msg: 'User not found' });
        }
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ msg: 'Error fetching user by ID', error });
    }
});

// Register a new user
UserRoute.post('/register', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send({ msg: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).send({ msg: 'Error registering user', error });
    }
});

// Update a user
UserRoute.put('/users/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).send({ msg: 'User not found' });
        }
        res.status(200).send({ msg: `${req.params.id} updated successfully`, data });
    } catch (error) {
        res.status(500).send({ msg: 'Error updating user', error });
    }
});

// Delete a user
UserRoute.delete('/users/:id', async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).send({ msg: 'User not found' });
        }
        res.status(200).send({ msg: `${req.params.id} user deleted successfully` });
    } catch (error) {
        res.status(500).send({ msg: 'Error deleting user', error });
    }
});

module.exports = UserRoute;
