const mongoose = require("mongoose");

// const URI = process.env.MONGODB_URI;
const URI = "mongodb+srv://sandeepsinghss7580:<db_password>@cluster0.r7ihz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const URI = "mongodb://localhost:27017"

const connectDb = async () => {
    try {
        // console.log(URI);
        // await mongoose.connect(URI);
        console.log("connection succssful to DB");
    } catch (error) {
        console.log(error)
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;