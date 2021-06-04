const mongoose = require('mongoose');

/* if(process.env.NODE_ENV === 'development') {
    var uri = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;
} else  if (process.env.NODE_ENV === 'development') { */
    var uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g1wzu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

async function dbConnect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    } catch (e) {
        console.log("Error while connecting to the database");
    }
}

module.exports = dbConnect;