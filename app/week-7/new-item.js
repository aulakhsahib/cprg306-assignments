"use client";

import { useState } from "react";

export default function NewItem({ setItems }) {
    const [itemName, changeItemName] = useState("");
    const [itemQuantity, changeItemQuantity] = useState(1);
    const [selectedValue, changeSelectedValue] = useState("produce");


    const options = [
        {
            label: "Produce",
            value: "produce"
        },
        {
            label: "Dairy",
            value: "diary"
        },
        {
            label: "Bakery",
            value: "bakery"
        },
        {
            label: "Meat",
            value: "meat"
        },
        {
            label: "Frozen Foods",
            value: "frozen foods"
        },
        {
            label: "Canned Goods",
            value: "canned goods"
        },
        {
            label: "Dry Goods",
            value: "dry goods"
        },
        {
            label: "Beverages",
            value: "beverages"
        },
        {
            label: "Snacks",
            value: "snacks"
        },
        {
            label: "Household",
            value: "household"
        },
        {
            label: "Other",
            value: "other"
        },
    ];

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
        setItems(prev => {
            return [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    name: itemName,
                    quantity: itemQuantity,
                    category: selectedValue
                }
            ]
        });
        changeItemName("");
        changeItemQuantity(1);
        changeSelectedValue("Produce");
    }

    return (
        <form className="text-black max-w-96 p-6 bg-slate-900 grid gap-y-4 rounded-lg w-11/12" onSubmit={submitHandler}>
            <input type="text" name="item-name" placeholder="Item Name" required value={itemName} onChange={nameChangeHandler} className="p-2 rounded-lg" />
            <div className="flex justify-between">
                <input type="number" name="item-quantity" min={1} value={itemQuantity} onChange={quantityChangeHandler} className="w-14 p-2 rounded-lg" />
                <select onChange={selectInputHandler} value={selectedValue} className="p-2 rounded-lg">
                    {options.map((option, index) => <option key={index} label={option.label} value={option.value}></option>)}
                </select>
            </div>
            <button className="text-white bg-violet-950 rounded-lg p-2">Add</button>
        </form>
    );
}
