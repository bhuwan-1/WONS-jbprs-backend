const express = require('express');
const { Sequelize} = require('sequelize');
const { blue, green, red } = require('colorette');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/user/userRoutes');
const authRoutes = require('./routes/auth/authRoutes');
const jobRoutes =  require('./routes/jobs/jobRoutes');
const rewardRoutes = require('./routes/rewards/rewardRoutes');


require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//controllers
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/rewards', rewardRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.PORT}`, green('✓'));
    console.log(`  Press ${red('ctrl-c')} to stop`);
})