const mongoose = require('mongoose')
const express = require("express");
const app = express();
let port = process.env.PORT || 3000;
const url = process.env.MONGODB_URI || 'mongodb+srv://Karol-Klimas:Szachy1234@sklepsruby.omqyc.mongodb.net/categories?retryWrites=true&w=majority'


// Połączenie się z bazą danych
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("połączono z bazą danych"))




// Importowanie modeli z ./models
const Chemistry = require('./models/chemistry')
const Accumulators = require('./models/accumulators')



app.get('/api/add/accumulators', (req, res)=>{
    const accumulator = new Accumulators(
        {
            id: 1,
            catalogNumber: "0 092 S30 020",
            Name: "Akumulator BOSCH S3 45Ah 400A P+",
            manufacturer: "BOSCH",
            product_specifications:{
                polarity: "P+",
                capacity_Ah_: 45,
                voltage_V_: 12,
                coldStart_A: 400,
                length_mm: 207,
                width_mm: 175,
                height_mm: 190
            },
            price_settings:{
                nettoPrice: "188,38",
                bruttoPrice: "231,71",
                vatTaxRate: "23"
            },
            promotion_settings:{
                promotionType: "None",
                promotionPrice: "None",
                startDate: "None",
                endDate: "None",
            },
            accessibility_settings:{
                shopStock: 3,
                availableForToday: 1,
                onlyForOrder: 0,
                onlyWithPrepayment: 0,
                unavailable: 0
            },
            photo_path: "/productImages/BOSCH0092S30020"
    }
    )
    accumulator.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

// Uruchamianie serwera
app.listen(port, ()=>{
    console.log(`API zostało uruchomione i działa pod adresem: http://localhost:${port}`)
})