const mongoose = require('mongoose');

const schema = mongoose.Schema

const UserModel = new schema({
    name:{ type: String, required:true },
    address:{ type: String, required:true },
    role:{ type:String, required:true, enum:['user','admin'] },
    mobile_number:{ type: Number, required:true,unique:true},
    password:{ type: String, required:true },

})
module.exports = mongoose.model('user',UserModel,'user')