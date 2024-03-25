const express = require('express');
const app = express();
const { Sequelize} = require('sequelize');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})