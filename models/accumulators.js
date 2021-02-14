const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Accumulators_Schema = new Schema(
    {
        id: Number,
        catalogNumber: String,
        Name: String,
        manufacturer: String,
        product_specifications:{
            polarity: String,
            capacity_Ah_: Number,
            voltage_V_: Number,
            coldStart_A: Number,
            length_mm: Number,
            width_mm: Number,
            height_mm: Number
        },
        price_settings:{
            nettoPrice: String,
            bruttoPrice: String,
            vatTaxRate: String
        },
        promotion_settings:{
            promotionType: String,
            promotionPrice: String,
            startDate: String,
            endDate: String,
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

const Accumulators = mongoose.model('accumulators', Accumulators_Schema)
module.exports = Accumulators