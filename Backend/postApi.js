const { MongoClient } = require('mongodb')
const mongoConnection = require('./dbExport')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/contact', async (req, res) => {

    const getData = await mongoConnection()
    const Result = await getData.insertOne(req.body);

})


app.post('/table', async (req, res) => {

    const getData = await mongoConnection()
    const Result = await getData.insertOne(req.body);

})

app.post('/signup', async (req, res) => {

    const getData = await mongoConnection()
    const { userLoginName, userLoginEmail, userLoginPassWord, userLoginConfPassWord } = req.body;
    const data = {
        userLoginName: userLoginName,
        userLoginEmail: userLoginEmail,
        userLoginPassWord: userLoginPassWord,
        userLoginConfPassWord: userLoginConfPassWord
    }

    try {
        const check = await getData.findOne({ userLoginEmail: userLoginEmail });
        if (check) {
            res.json('exist')
        }
        else {
            res.json('notexist')
            const Result = await getData.insertMany([data]);
        }
    }
    catch (error) {
        res.json('notexist')

    }
})


app.post('/login', async (req, res) => {
    const getData = await mongoConnection()

    const {  userLoginEmail, userLoginPassWord } = req.body;

try {
    const check = await getData.findOne({ userLoginEmail: userLoginEmail });

    if (check) {
        res.json('exist')
    }
    else {
        res.json('notexist')
    }
} catch (error) {
    res.json('notexist')

}


})

app.listen(8800, () => {
    console.log('its Sucessfull');
})