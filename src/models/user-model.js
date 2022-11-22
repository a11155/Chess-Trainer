const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required:true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    winCount: {type: Number, default: 0},
    loseCount: {type:Number, default: 0}
});

module.exports = model('User', UserSchema);
