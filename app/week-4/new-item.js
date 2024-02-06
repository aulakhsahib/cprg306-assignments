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
        changeItemQuantity(event.target.value);
    }

    const selectInputHandler = event => {
        changeSelectedValue(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log({ itemName, itemQuantity, selectedValue });
        changeItemName("");
        changeItemQuantity(1);
        changeSelectedValue("Produce");
    }

    return (

        <div>
            <p>{itemName}</p>
            <p>{itemQuantity}</p>
            <p>{selectedValue}</p>
            <form className="text-black" onSubmit={submitHandler}>
                <input type="text" name="item-name" placeholder="Item Name" value={itemName} onChange={nameChangeHandler} />
                <input type="number" name="item-quantity" min={1} value={itemQuantity} onChange={quantityChangeHandler} />
                <select onChange={selectInputHandler} value={selectedValue}>
                    {options.map((optionLabel, index) => <option key={index} label={optionLabel} value={optionLabel}></option>)}
                </select>
                <button className="text-white">Add</button>
            </form>

        </div>
    );
}
