
"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

function Page() {
    // Initialize state variable for items
    const [items, setItems] = useState(itemsData);

    // Event handler for adding new item
    const handleAddItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return(
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
            <h1 className="text-4xl mb-6 font-bold text-center">Shopping List</h1>
            
            <NewItem onAddItem={handleAddItem} />

            <ItemList items={items} />
        </main>
    );
}

export default Page;
