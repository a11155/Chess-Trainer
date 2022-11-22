const {Schema, model} = require('mongoose');

const DebutSchema = new Schema({
    title : {type: String, requierd:true},
    difficulty : {type: Number, min: 0, max: 5},
    effectiveness : {type: Number, min: 0, max: 5},
    popularity : {type: Number, min: 0, max: 5},
    description : {type: String, requierd:true},
    img_src : {type: String, requierd:true},
    find_more_src: {type: String, requierd:true},
    isWhite : {type: Boolean, required:true, default: false},

});

module.exports = model('Debut', DebutSchema);
