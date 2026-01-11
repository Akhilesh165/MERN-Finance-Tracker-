# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from pydantic import BaseModel

class Expense(BaseModel):
    category: str
    amount: float
app = FastAPI()

# Frontend (React) ko connect karne ke liye settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample Data (Asli project mein ye Database se aayega)
transactions = [
    {"id": 1, "category": "Food", "amount": 500},
    {"id": 2, "category": "Rent", "amount": 5000},
    {"id": 3, "category": "Shopping", "amount": 1200},
]

@app.get("/api/expenses")
async def add_expense(expense: Expense):
    # Nayi entry banayein
    new_entry = {
        "id": len(transactions) + 1,
        "category": expense.category,
        "amount": expense.amount
    }
    # List mein add karein
    transactions.append(new_entry)
    return new_entry

@app.get("/api/predict")
async def predict_budget():
    # Simple Logic: Total ka 10% extra for next month
    df = pd.DataFrame(transactions)
    if df .empty;
        return {"predicted_budget"; 0}
    total = df['amount'].sum()
    prediction = total + (total * 0.10)
    return {"predicted_budget": 
            prediction}

if __name__== "_main_":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)