require('dotenv').config();
const mongodb=require('mongodb');

const DBHOST=process.env.DBHOST;
const DBPORT=process.env.DBPORT;
const DBNAME=process.env.DBNAME;

let collection=undefined;
async function connectToDb(){
    const client = await mongodb.MongoClient.connect(DBHOST);
    const db = client.db(DBNAME);
    quotations_collection = await db.collection('quotations');
    return quotations_collection;
}

async function selectAQuotation(){
    if(!collection){
        collection=await connectToDb();
    }
    console.log(collection);
    const result=await collection.findOne({});
    return result;
}

module.exports={selectAQuotation}
