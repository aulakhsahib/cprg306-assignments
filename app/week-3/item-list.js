import Item from "./item";

export default function ItemList() {
    const dataList = [{
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    },
    {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    },
    {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    },
    {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    },
    {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    },
    {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    },
    {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    },
    {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    },
    {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    },
    {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    },
    {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    },
    {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    }]
    return (
        <ul className="grid gap-y-4 w-11/12 my-6 mx-auto">
            {dataList.map((data, index) => {
                return (
                    <li className="bg-blue-900 rounded-lg p-4 w-6/12 max-w-xs" key={index}>
                        <Item {...data} />
                    </li>
                );
            })}
        </ul>
    );
};
