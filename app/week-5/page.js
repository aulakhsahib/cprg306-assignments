"use client";

import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./itemsData.json";

export default function Page() {
  const items = itemsData;

  const [sortBy, setSortBy] = useState("name");
  
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <header>
        <h1>Shopping List</h1>
        <nav className="">
          <form>
            <label>
              Name
              <input
                id="name"
                type="radio"
                onChange={handleChange}
                checked={sortBy === "name"}
                value="name"
                name="Select Sort By Option"
                className=""
              />
            </label>

            <label>
              Category
              <input
                id="radio"
                type="radio"
                onChange={handleChange}
                checked={sortBy === "category"}
                value="category"
                name="Select Sort By Option"
                className=""
              />
            </label>

            <label>
              Grouped Category
              <input
                id="radio"
                type="radio"
                onChange={handleChange}
                checked={sortBy === "groupedCategory"}
                value="groupedCategory"
                name="Select Sort By Option"
                className=""
              />
            </label>
          </form>
        </nav>
      </header>
      <main>
        <ItemList items={items} sortBy={sortBy} />
      </main>
    </>
  );
}
