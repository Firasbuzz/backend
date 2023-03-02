const mongoose = require('mongoose');
require("dotenv").config();
const db_connect = async () => {
    try {
        mongoose.set('strictQuery', true)

        const result = await mongoose.connect(process.env.ATLAS_URI);
        console.log("database mriguel");
    } catch (error) {
        console.log(error)
    }
};

module.exports = db_connect;