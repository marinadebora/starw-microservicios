const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs")
mongoose = mongoose.createConnection(MONGO_URI)