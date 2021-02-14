const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chemistry_Schema = new Schema(
    {
        id: Number,
        catalogNumber: String,
        Name: String,
        manufacturer: String,
        price_settings:{
            nettoPrice: String,
            bruttoPrice: String,
            vatTaxRate: String
        },
        promotion_settings:{
          promotionType: String,
          promotionPrice: String,
          startDate: String,
          endDate: String
        },
        accessibility_settings:{
            shopStock: Number,
            availableForToday: Number,
            onlyForOrder: Number,
            onlyWithPrepayment: Number,
            unavailable: Number
        },
        photo_path: String
}, { timestamps: true})
// nie mam zielonego pojecia czemu jak wpisuje tutaj chemistry i tak mongodb robi collection chemistries
const Chemistry = mongoose.model('chemistries', Chemistry_Schema)
module.exports = Chemistry