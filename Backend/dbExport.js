const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url)
const dbname = 'FOOD'
 async function dbconnected(){
await client.connect()
const dbcon = client.db(dbname)
const collection = dbcon.collection('Foodies')
return collection

}
module.exports = dbconnected;