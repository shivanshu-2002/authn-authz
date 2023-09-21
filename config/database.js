const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect('mongodb://127.0.0.1/Blog_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database is up");
    })
    .catch((err) => {
        console.log("Something went wrong with the database connection:", err);
    });
};

module.exports = dbConnect;