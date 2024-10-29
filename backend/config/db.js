const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to the database')
    } catch (error) {
        console.log("Cannot connect to the database!", error)
    }
}

module.exports = connectDb