const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware }= require("http-proxy-middleware")

const app = express();
app.use(morgan("dev"));

app.use("/characters",createProxyMiddleware({
  target:"http://localhost:8001",
  changeOrigin:true //indica que a partir de aca la request continua en este puerto

}))
app.use("/films",createProxyMiddleware({
  target:"http://localhost:8002",
  changeOrigin:true //indica que a partir de aca la request continua en este puerto

}))
app.use("/planets",createProxyMiddleware({
  target:"http://localhost:8003",
  changeOrigin:true //indica que a partir de aca la request continua en este puerto

}))
app.listen(8000, ()=>{
  console.log("Gateway on port 8000")
})
