const mongoose = require("mongoose")
require('dotenv').config();
const mongoUri =
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.eoaq29j.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const uri = encodeURI(String(mongoUri));
const mongoConnection = mongoose.connect(uri);

export default mongoConnection