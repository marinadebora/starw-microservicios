const {Schema}= require("mongoose");

const characterSchema = new Schema({
    _id:String,
    name: { type: String, require: true, upercase: true },
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color:String,
    birth_year: String,
    gender: String,//enum para que sean solo siertos valores predeterminados
    homeworld:{type: String, ref: "Planet"},//referencia aun id de planetas
    films: [{type:String,ref: "Film"}]//array de referencia a peliculas
},{
    timestamps: false,
    versionKey: false 
  })

characterSchema.statics.list = async function (){
   return await this.find()
    .populate("homeworld",["_id","name"])
    .populate("films",["_id","title"])
}

characterSchema.statics.getId= async function(id){
    return await this.findById(id)
    .populate("homeworld",["_id","name"])
    .populate("films",["_id","title"])
}

characterSchema.statics.insert = async function(character){
return await this.create(character)
}

module.exports= characterSchema;