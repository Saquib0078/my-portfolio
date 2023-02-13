const mongoose= require('mongoose')


const MovieSchema= new mongoose.Schema({
    rank:{type:Number},
      rankUpDown: {type:Number},
      title: {type:String},
      fullTitle: {type:String},
      year: {type:Number},
      image:{type:String},
      crew:{type:String} ,
      imDbRating: {type:Number},
      imDbRatingCount: {type:Number}  
      
},{timestamps:true}
)
module.exports = mongoose.model('movie',MovieSchema)