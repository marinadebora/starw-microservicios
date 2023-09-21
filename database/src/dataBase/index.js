const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/env");


const conn = mongoose.createConnection(MONGO_URI);

const Character= conn.model("Character",require("./schemas/characterSchema"));

Character.find().populate("films").then((res)=>console.log(res))