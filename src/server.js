const express = require('express');
const { Sequelize} = require('sequelize');
const { blue, green, red } = require('colorette');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/user/userRoutes');


require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//controllers
app.use('/api/user', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}`, green('✓'));
    console.log(`  Press ${red('ctrl-c')} to stop`);
})