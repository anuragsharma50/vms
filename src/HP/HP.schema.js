// Historical performance

import mongoose from "mongoose";

export const HPSchema = mongoose.Schema({
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    onTimeDeliveryRate: {
        type: Number,
        required: true
    },
    qualityRatingAvg:{
        type: Number,
        required: true
    },
    averageResponseTime:{
        type: Number,
        required: true
    },
    fulfillmentRate: {
        type: Number,
        required: true
    }
})
