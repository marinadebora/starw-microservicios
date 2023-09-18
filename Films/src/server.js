const express = require('express');
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/films",require("./routes"));
server.use("*",(req,res)=>res.status(400).send("Not found"));

//sobreescribiendo el manejador de errores para no exponer los datos 
server.use((req,res,next)=>{
  res.status(err.statusCode || 500).send({
    error:true,
    message: err.message
  })
})

module.exports = server;
