"use client";

import { useState } from "react";

export default function NewItem() {
    const [itemName, changeItemName] = useState("");
    const [itemQuantity, changeItemQuantity] = useState(1);
    const [selectedValue, changeSelectedValue] = useState("Produce");


    const options = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"];

    const nameChangeHandler = event => {
        changeItemName(event.target.value);
    }

    const quantityChangeHandler = event => {
        changeItemQuantity(parseInt(event.target.value));
    }

    const selectInputHandler = event => {
        changeSelectedValue(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log({ name: itemName, quantity: itemQuantity, category: selectedValue });
        alert(`Added item: ${itemName} quantity: ${itemQuantity} category: ${selectedValue}`);
        changeItemName("");
        changeItemQuantity(1);
        changeSelectedValue("Produce");
    }

    return (
        <form className="text-black max-w-96 mx-auto p-6 bg-slate-900 grid gap-y-4 rounded-lg w-11/12" onSubmit={submitHandler}>
            <input type="text" name="item-name" placeholder="Item Name" required value={itemName} onChange={nameChangeHandler} className="p-2 rounded-lg" />
            <div className="flex justify-between">
                <input type="number" name="item-quantity" min={1} value={itemQuantity} onChange={quantityChangeHandler} className="w-14 p-2 rounded-lg" />
                <select onChange={selectInputHandler} value={selectedValue} className="p-2 rounded-lg">
                    {options.map((optionLabel, index) => <option key={index} label={optionLabel} value={optionLabel}></option>)}
                </select>
            </div>
            <button className="text-white bg-violet-950 rounded-lg p-2">Add</button>
        </form>
    );
}
