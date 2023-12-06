import React, { useState, useEffect } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "./shopping-list-service";
import Link from 'next/link'; // Import from Next.js

function Page() {
  const [items, setItems] = useState([]);
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Fetch items from Firestore
  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  // Add item to Firestore
  const handleAddItem = async (newItem) => {
    if (user) {
      const newId = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id: newId }]);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="btn-logout">Logout</button>
          <Link href="/shopping-list"><a>Go to Shopping List</a></Link>
        </>
      ) : (
        <button onClick={gitHubSignIn} className="btn-login">Login with GitHub</button>
      )}
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

export default Page;
