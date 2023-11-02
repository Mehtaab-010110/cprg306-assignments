"use client";

import React, { useState } from 'react';
import Item from './item';

function ItemList({ items }) { // Accepting items as a prop
    const [sortBy, setSortBy] = useState('name');  // Initializing sortBy to 'name'

    // Sorting the items based on sortBy
    const sortedItems = [...items];  // Using the items prop
    if (sortBy === 'name') {
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <div>
            <div className="mb-4">
                <button 
                    onClick={() => setSortBy('name')}
                    className={`px-4 py-2 border rounded-md ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'}`}>
                    Sort by Name
                </button>

                <button 
                    onClick={() => setSortBy('category')}
                    className={`ml-2 px-4 py-2 border rounded-md ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-blue-500'}`}>
                    Sort by Category
                </button>
            </div>

            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
