// const express = require('express')
// const app = express()
// const connectDB = require('../Backend/DB/dbConnection')
// const User = require('./DB/user')
// const cors = require('cors')
// app.use(express.json())
// app.use(cors())

// app.post('/register', async (req, res) => {
//     try {
//         const { userLoginName, userLoginEmail, userLoginPassWord } = req.body;
//         console.log(req.body);
//         const user = new User({
//             userLoginName, userLoginEmail, userLoginPassWord
//         })
//         await user.save();
//         res.status(201).json({ message: "Registration Sucessfull" })
//     }
//     catch (Error) {
//         res.status(500).json({ Error: "Registration Failed" })
//     }
// })

// app.post('/login', async (req, res) => {
//     try {
//         const { userLoginName, userLoginEmail, userLoginPassWord } = req.body;
//         const user = await User.findOne({userLoginName})

//         if(!user){
//             return res.status(401).json({Error : "Invalid username"})
//         }
//         if(user.userLoginPassWord !== userLoginPassWord){
//             return res.status(401).json({Message : "Invalid UserName or Pasword"})
//         }
//         res.status(200).json({Error : "Login Sucessfull"})

//     } catch (error) {
//          res.status(500).json({Error : "Login Failed"})
//     }
// })



// app.post('/contact', async (req, res) => {
//     try {
//         const {usrName , usrEmail , usrContact , usrMessage} = req.body;
//         const user = new User({usrName, usrEmail, usrContact , usrMessage})
//         await user.save();
//         // alert('Message send sucessfull')

//     } catch (error) {
//          res.status(500).json({Error : "Login Failed"})
//     }
// })



// // app.post('/booktable', async (req, res) => {
// //     try {
// //         const { userLoginName, userLoginEmail, userLoginPassWord } = req.body;
// //         const user = await User.findOne({userLoginName})

// //         if(!user){
// //             return res.status(401).json({Error : "Invalid username"})
// //         }
// //         if(user.userLoginPassWord !== userLoginPassWord){
// //             return res.status(401).json({Message : "Invalid UserName or Pasword"})
// //         }
// //         res.status(200).json({Error : "Login Sucessfull"})

// //     } catch (error) {
// //          res.status(500).json({Error : "Login Failed"})
// //     }
// // })

// connectDB()


// app.listen(4500, () => {
//     console.log('Server is listening on port : 4500');
// })