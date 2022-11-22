const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
    refreshToken: {type: String, ref: 'User'},
    user: {type: Schema.Types.ObjectId, default: false},
});

module.exports = model('Token', TokenSchema);
