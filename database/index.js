const server = require("./src/server");

server.listen(8004,()=>{
    console.log("database server on port 8004")
})




/* 
Films.find()
.populate("characters",["name"])
.populate("planets",["name"])
.then((res)=>console.log(res));

Planets.find()
.populate("residents",["name"])
.populate("films",["name"])
.then((res)=>console.log(res)); */