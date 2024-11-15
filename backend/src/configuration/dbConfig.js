const mongoose = require('mongoose');

// Here you use your db url and collection name.
// mongoose.connect(`mongodb://${config.db.url}/${config.db.name}`); 

// Example - This is my Db url and collection name.
mongoose.connect("mongodb://127.0.0.1:27017/curd_db", {});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log(`Connected connection error: ${err}`);
});

module.exports = mongoose;