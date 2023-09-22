module.exports = (obj,model)=>{
if(model === "Character"){
 return  {
    _id: obj._id,
    name:obj.name,
    height:obj.height,
    mass:obj.mass,
    hair_color:obj.hair_color,
    skin_color:obj.skin_color,
    eye_color:obj.eye_color,
    birth_year:obj.birth_year,
    gender:obj.gender,
    homeworld:obj.homeworld,
    films:obj.films
  };
  
}else if(model === "Films"){
  return {
    _id: obj._id,
    title:obj.title,
    opening_crawl:obj.opening_crawl,
    director:obj.director,
    producer:obj.producer,
    release_date:obj.release_date,
    characters:obj.characters,
    planets:obj.planets
  };
 
}else if(model === "Planet"){
  return {
    _id: obj._id,
    name:obj.name,
    rotation_period:obj.rotation_period,
    orbital_period:obj.orbital_period,
    diameter:obj.diameter,
    climate:obj.climate,
    gravity:obj.gravity,
    terrain:obj.terrain,
    surface_water:obj.surface_water,
    residents:objresidents,
    films:obj.films
  }
 
}else{
  return {
    error: true,
    message:"Error in path"
  }
}
}
