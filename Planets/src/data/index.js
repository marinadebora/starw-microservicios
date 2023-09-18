const planets = require("./planets.json");

module.exports = {
  list : ()=>{
    return planets
  },
  create: async()=>{
    throw Error("Error al crear un planeta")
  }
}