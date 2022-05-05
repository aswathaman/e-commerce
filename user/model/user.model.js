const mongoose = require('mongoose');

const schema = mongoose.Schema

const UserModel = new schema({
    name:{ type: String, required:true },
    address:{ type: String, required:true },
    mobile_number:{ type: Number, required:true,unique:true },
    password:{ type: String, required:true },

})
module.exports = mongoose.model('user',UserModel,'user')