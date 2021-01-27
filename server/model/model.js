const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    pname : {
        type : String,
    },
    cname : {
        type: String,
    },
    cid : Number,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;