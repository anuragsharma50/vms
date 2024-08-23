import mongoose from "mongoose";

// purchase order
export const POSchema = mongoose.Schema({
    poNumber: {
        type: String,
        unique: true,
        required: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vendor',
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending','completed','canceled']
    },
    qualityRating: Number,
    issueDate: {
        type: String,
        required: true,
    },
    acknowledgmentDate: Date
})

