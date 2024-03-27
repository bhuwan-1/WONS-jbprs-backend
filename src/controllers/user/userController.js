const User = require('../../models/users/model')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.send(users); 
}

const userRegister = async (req, res) => {
    const { cid, password } = req.body;
    try {
        // Check if the CID is already in use
        const existingUser = await User.findOne({ where: { cid } });
        if (existingUser) {
            return res.status(400).json({ message: 'CID already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
        // Create a new user record in the database
        const newUser = await User.create({
            cid,
            password: hashedPassword
        });
        // Return a success response
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    
}

module.exports = { getAllUsers, userRegister }