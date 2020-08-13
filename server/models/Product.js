const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 250
    },
    subtitle: {
        type: String,
        maxlength: 250
    },
    description: {
        type: String
    },
    imagesvertical: {
        type: Array,
        default:[]
    },
    imageshorizontal: {
        type: Array,
        default:[]
    },
    categories: {
        type: Number,
        default: 1
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }