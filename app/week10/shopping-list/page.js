// ./app/week7/page.js

"use client";

import React, { useState, useEffect } from 'react'; 
import NewItem from './new-item';
import ItemList from './item-list';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "./shopping-list-service"; 


function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    // Clean up the item name
    const cleanedItemName = itemName.split(',')[0].split(' ')[0];
    setSelectedItemName(cleanedItemName);
  };

  return(
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl mb-6 font-bold text-center">Shopping List</h1>
      
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
}

export default Page;
