import React from 'react';

function Item({name, quantity, category}){
    return(
        <li className="border p-4 rounded-lg mb-2">
            <span className="font-bold">{name}</span>
            <div>
                Buy <span>{quantity}</span> in <span className="text-gray-500">{category}</span>
            </div>
        </li>
    );
}

export default Item;
