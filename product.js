const mongoose = require('mongoose');

// Ye batayega ki Finance/E-commerce ka data kaisa dikhega
const productSchema = new mongoose.Schema({
    item_name: String,
    price: Number,
    category: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);