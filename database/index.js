const server = require("./src/server");
const {Character,Film,Planet}= require("./src/dataBase")

//Character.list().then((res)=>console.log(res));
//Character.getId(1).then((res)=>console.log(res));

/* Character.insert({
    _id:"200",
    name: "jorge vega",
    height: "172",
    mass: "77",
    hair_color: "brown",
    skin_color: "blond",
    eye_color:"brown",
    birth_year: "1991",
    gender: "male"
   
}).then((res)=>console.log(res)) */

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