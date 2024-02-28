"use client";

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./itemsData.json";
import NewItem from "./new-item";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const [sortBy, setSortBy] = useState("name");

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };

    return (
        <>
            <NewItem setItems={setItems} />
            <div className="w-11/12 mx-auto mt-6">
                <header>
                    <h1 className="font-bold text-2xl">Shopping List</h1>
                    <nav className="flex gap-x-4 items-center my-8">
                        <span>Sort By :</span>
                        <form className="flex gap-x-4 items-center">
                            <label className="has-[:checked]:bg-orange-800 bg-orange-600 p-2 rounded">
                                Name
                                <input
                                    id="name"
                                    type="radio"
                                    onChange={handleChange}
                                    checked={sortBy === "name"}
                                    value="name"
                                    name="Select Sort By Option"
                                    className="fixed -left-full -top-full invisible"
                                />
                            </label>

                            <label className="has-[:checked]:bg-orange-800 bg-orange-600 p-2 rounded">
                                Category
                                <input
                                    id="radio"
                                    type="radio"
                                    onChange={handleChange}
                                    checked={sortBy === "category"}
                                    value="category"
                                    name="Select Sort By Option"
                                    className="fixed -left-full -top-full invisible"
                                />
                            </label>

                            <label className="has-[:checked]:bg-orange-800 bg-orange-600 p-2 rounded">
                                Grouped Category
                                <input
                                    id="radio"
                                    type="radio"
                                    onChange={handleChange}
                                    checked={sortBy === "groupedCategory"}
                                    value="groupedCategory"
                                    name="Select Sort By Option"
                                    className="fixed -left-full -top-full invisible"
                                />
                            </label>
                        </form>
                    </nav>
                </header>
                <main>
                    <ItemList items={items} sortBy={sortBy} />
                </main>
            </div>
        </>
    );
}
