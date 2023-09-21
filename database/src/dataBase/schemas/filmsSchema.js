const {Schema}= require("mongoose");

const filmsSchemas = new Schema({
  _id: String,
  title: { type: String, require: true, upercase: true },
  opening_crawl: String,
  director:String,
  producer: String,
  release_date: String,
  characters: [{type:String, ref:"Character"}],
  planets: [{type:String, ref:"Planet"}]
},{
  timestamps: false,
  versionKey: false 
})
filmsSchemas.statics.list = async function (){
  return await this.find()
   .populate("characters",["_id","name"])
   .populate("planets",["_id","name"])
}

filmsSchemas.statics.getId= async function(id){
   return await this.findById(id)
   .populate("characters",["_id","name"])
   .populate("planets",["_id","name"])
}

filmsSchemas.statics.insert = async function(film){
return await this.create(film)
}
module.exports =filmsSchemas;