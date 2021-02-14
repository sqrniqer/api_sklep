const mongoose = require('mongoose')
const express = require("express")
const app = express()
let port = process.env.PORT || 3000
const url = process.env.MONGODB_URI || 'mongodb+srv://Karol-Klimas:Szachy1234@sklepsruby.omqyc.mongodb.net/categories?retryWrites=true&w=majority'

// Połączenie się z bazą danych
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
.then(console.log("połączono z bazą danych"))

// Importowanie modeli z ./models
const Chemistry = require('./models/chemistry')
const Accumulators = require('./models/accumulators')




// przy uzywaniu tego na dole zaczyna pojawiac sie error code: 'ERR_HTTP_HEADERS_SENT'
// prawdopodobnie to jakis problem z express.js ale cholera wie
// do ogarniecia



app.get('/api/:collection', (req, res)=>{
    //res.send(req.params)
    res.send(req.params.collection)
})

app.listen(port, ()=>{
    console.log(`API zostało uruchomione i działa pod adresem: http://localhost:${port}`)
})