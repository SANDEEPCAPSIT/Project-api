const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        console.log(URI);
        await mongoose.connect(URI);
        console.log("connection succssful to DB");
    } catch (error) {
        console.log(error)
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;