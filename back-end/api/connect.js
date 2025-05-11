import {MongoClient} from "mongodb"


//const URI = "mongodb+srv://robertosfn1998:<SRriJcuLiXXuTldw>@cluster0.cbllizt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const URI = "mongodb+srv://robertosfn1998:SRriJcuLiXXuTldw@cluster0.cbllizt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(URI);


export const db = client.db("spotifyAula");
const songCollection = await db.collection('songs').find({}).toArray();

console.log(songCollection)