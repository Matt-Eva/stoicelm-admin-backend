require('dotenv')config('./.env')
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express()

let db;

app.use(cors())

const connectDb = async () =>{
    
}

app.listen(4000, () =>{
    console.log("app listening on port 4000")
})

app.get("/creators", ()=>{

})

app.get("/writing", () =>{

})

app.get("/writing/:writing", () =>{

})

app.post("/writing", () =>{

})

app.post("/creators", () =>{

})

app.patch("/writing/:writing", () =>{

})

app.patch("/creators/:creator", () =>{

})

app.delete("/creators/:creator", ()=>{

})

app.delete("/writing/:writing", () =>{

})