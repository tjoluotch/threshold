var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNo: {type: String, required: true}
},
    {
        timestamps:true
    });

module.exports = mongoose.model('User', schema);