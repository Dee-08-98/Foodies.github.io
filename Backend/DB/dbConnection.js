const mongoose = require('mongoose')
const connectDB = async()=>{

   try {
   await mongoose.connect('mongodb://127.0.0.1:27017/FOOD')

   console.log('Connected to mongodb');
   }
    catch (error) {
    console.log('Error');
   }
}

module.exports = connectDB;