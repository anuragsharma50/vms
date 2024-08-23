import mongoose from "mongoose";

export const vendorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactDetails: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    vendorCode: {
        type: String,
        unique: true,
        required: true
    },
    onTimeDeliveryRate: Number,
    qualityRatingAvg: Number,
    averageResponseTime: Number,
    fulfillmentRate: Number
})