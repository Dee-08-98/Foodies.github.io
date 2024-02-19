
const mongoose = require('mongoose')


const Schema = mongoose.Schema;
const userSchema = new Schema({
    userLoginName: {
        type : String,
        required : true,
        unique:true
    },
    userLoginEmail: {
        type : String,
        required : true
       
    },
    userLoginPassWord: {
        type : String,
        required : true
       
    },
    
    usrName: {
        type : String,
        required : true
    },
    usrEmail:  {
        type : String,
        required : true
    },
    usrContact:  {
        type : String,
        required : true
    },
    usrMessage: {
        type : String,
        required : true
    },
   
});

const User = mongoose.model('foodiesUsers', userSchema);

module.exports = User