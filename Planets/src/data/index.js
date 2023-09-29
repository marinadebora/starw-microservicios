const axios = require("axios")

module.exports = {
  list: async()=>{
    const planets = await axios.get(`http://database:8004/Planet`)
    return planets.data
  },
  getId:async(id)=>{
    const planets = await axios.get(`http://database:8004/Planet/${id}`)
    return planets.data
  },
  insert: async(planet)=>{
    return  await axios.post(`http://database:8004/Planet`,planet)
  }
}