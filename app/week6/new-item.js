"use client";

import React, { useState } from 'react';

// Add the onAddItem prop to the function declaration
const NewItem = ({ onAddItem }) => {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // Form Submission Handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name, 
            quantity,
            category
        };

        console.log(item);

        // Replace the alert with the call to onAddItem
        onAddItem(item);

        // Reset state variables
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    // Render the Component
    return (
        <div className="h-2rem bg-gray-900 flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="p-6 bg-black text-white space-y-4 shadow-lg rounded-lg w-full max-w-lg">
                <div>
                    <label className="block mb-1 font-bold text-blue-400">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 w-full border rounded bg-gray-800 text-white border-blue-400 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                    <label className="block mb-1 font-bold text-blue-400">Quantity:</label>
                    <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="p-2 w-full border rounded bg-gray-800 text-white border-blue-400 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                    <label className="block mb-1 font-bold text-blue-400">Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 w-full border rounded bg-gray-800 text-white border-blue-400 focus:border-blue-500 focus:outline-none">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>                    </select>
                </div>

                <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Submit</button>
            </form>
        </div>
    );
}

export default NewItem;
