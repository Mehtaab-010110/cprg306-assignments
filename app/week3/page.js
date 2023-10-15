import React from "react";
import ItemList from './item-list';

function Page() {
    return(
        <main className = "min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
        <h1 className = "text-4xl mb-6 font-bold text-center">Shopping List</h1>
        <ItemList/>
        </main>
    );
}

export default Page;