const {Schema}= require("mongoose");

const characterSchema = new Schema({
    _id:String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color:String,
    birth_year: String,
    gender: String,//enum para que sean solo siertos valores predeterminados
    homeworld:{type: String, ref: "Planet"},//referencia aun id de planetas
    films: [{type:String,ref: "Film"}]//array de referencia a peliculas
});

module.exports= characterSchema;