const mongoose = require('mongoose')
const express = require("express")
const app = express()
let port = process.env.PORT || 4000
const url = process.env.MONGODB_URI || 'mongodb+srv://Karol-Klimas:Szachy1234@sklepsruby.omqyc.mongodb.net/categories?retryWrites=true&w=majority'

// Połączenie się z bazą danych
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then(console.log("połączono z bazą danych"))

// Importowanie modeli z ./models
const Chemistry = require('./models/chemistry')
const Accumulators = require('./models/accumulators')







// Routes

app.get('/api/chemistry', (req, res)=>{
    Chemistry.find()
    .then((results)=>{
        console.log(results)
        res.send(results)
    })
    .catch((err)=>{ 
        console.log("Napotkano problem przy przesyłaniu danych z bazy danych do klienta API")
        console.log(err)
    })
})

app.get('/api/accumulators', (req, res)=>{
    Accumulators.find()
    .then((results)=>{
        console.log(results)
        res.send(results)
    })
    .catch((err)=>{ 
        console.log("Napotkano problem przy przesyłaniu danych z bazy danych do klienta API")
        console.log(err)
    })
})



app.listen(port, ()=>{
    console.log(`API zostało uruchomione i działa pod adresem: http://localhost:${port}`)
})