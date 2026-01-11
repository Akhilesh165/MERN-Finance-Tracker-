const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares - Inka order bahut zaroori hai!
app.use(cors()); // Frontend aur Backend ki dosti ke liye
app.use(express.json()); // JSON data samajhne ke liye

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/financeDB')
    .then(() => console.log("MongoDB se connection pakka ho gaya! ✅"))
    .catch((err) => console.error("MongoDB connect nahi hua:", err));

// Schema setup
const productSchema = new mongoose.Schema({
    item_name: String,
    price: Number,
    category: String,
    date: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

// --- API Routes ---

// 1. Data Save karne ke liye (POST)
app.post('/api/expenses', async (req, res) => {
    try {
        const newProduct = new Product({
            item_name: req.body.category, // Frontend ki category ko naam bana rahe hain
            price: req.body.amount,      // Yahan comma (,) laga diya hai
            category: req.body.category
        });
        await newProduct.save();
        res.status(201).send(newProduct);
        console.log("Data successfully save ho gaya! 💰");
    } catch (error) {
        res.status(400).send({ error: "Data save nahi hua" });
    }
});

// 2. Data dikhane ke liye (GET)
app.get('/api/expenses', async (req, res) => {
    try {
        const expenses = await Product.find().sort({ date: -1 });
        res.status(200).send(expenses);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 3. Data Delete karne ke liye
app.delete('/api/expenses/:id', async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).send("Item nahi mila");
        res.status(200).send({ message: "Item delete ho gaya! 🗑️" });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Port Setting
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server port ${PORT} par daud raha hai... 🚀`);
})