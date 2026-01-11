import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // 1. Purana data load karne ke liye (GET Request)
  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/expenses');
      setExpenses(res.data);
    } catch (err) {
      console.error("Data load nahi ho raha:", err);
    }
  };

  // 2. Naya data add karne ke liye (POST Request)
  const handleAddExpense = async () => {
    if (!category || !amount) {
      alert("Bhai, Category aur Amount dono bharo!");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/expenses', {
        category: category,
        amount: parseFloat(amount)
      });

      if (res.status === 201 || res.status === 200) {
        alert("Entry Add Ho Gayi! ✅");
        setExpenses([...expenses, res.data]); // List update karein
        setCategory(''); // Input khali karein
        setAmount('');
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("Network Error: Backend (Port 5000) check karo!");
    }
  };
const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/api/expenses/${id}`);
        // List ko turant update karne ke liye
        setExpenses(expenses.filter(exp => exp._id !== id));
        alert("Kharcha delete ho gaya! ✅");
    } catch (err) {
        console.error("Delete nahi hua:", err);
    }
};
  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', display: 'inline-block' }}>
        <h3>Add New Expense</h3>
        <input 
          type="text" 
          placeholder="Category (e.g. Food)" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '250px' }}
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '250px' }}
        />
        <button onClick={handleAddExpense} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add Expense
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>History</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {expenses.map((exp, index) => (
            <li key={index} style={{ background: '#eee', margin: '5px', padding: '10px', borderRadius: '5px', width: '300px', marginLeft: 'auto', margin国際: 'auto' }}>
              <strong>{exp.category}</strong>: ₹{exp.price || exp.amount}
              <button 
  onClick={() => handleDelete(exp._id)} 
  style={{ marginLeft: '15px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '2px 10px' }}
>
  Delete
</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;