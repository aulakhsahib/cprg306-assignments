import Item from "./item";

export default function ItemList({ items, sortBy, setMainIngredient }) {

    let listToRender;
    if (sortBy === "name") {
        listToRender = [...items].sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA > nameB) return 1;
            else if (nameA < nameB) return -1;
            else return 0;
        });
    }
    else if (sortBy === "category") {
        listToRender = [...items].sort((a, b) => {
            const categoryA = a.category.toLowerCase();
            const categoryB = b.category.toLowerCase();
            if (categoryA > categoryB) return 1;
            else if (categoryA < categoryB) return -1;
            else return 0;
        });
    }
    else if (sortBy === "groupedCategory") {
        let sortedList = [...items].sort((a, b) => {
            const categoryA = a.category.toLowerCase();
            const categoryB = b.category.toLowerCase();
            if (categoryA > categoryB) return 1;
            else if (categoryA < categoryB) return -1;
            else return 0;
        });
        listToRender = sortedList.reduce((groupByData, item) => {
            (!(item.category in groupByData)) && (groupByData[item.category] = []);
            groupByData[item.category].push(item);
            return groupByData;
        }, {})
    }

    const mainIngredientSetter = (mainIngredient) => {
        const emojiRegex = /\p{Extended_Pictographic}/u;
        const isEmojiPresentInString = emojiRegex.test(mainIngredient);
        if (isEmojiPresentInString) {
            const mainIngredientWithoutEmoji = mainIngredient.replace(emojiRegex, '').trim();
            if (mainIngredientWithoutEmoji.includes(',')) {
                const indexOfComma = mainIngredientWithoutEmoji.indexOf(',');
                const stringWithoutComma = mainIngredientWithoutEmoji.slice(0, indexOfComma);
                setMainIngredient(stringWithoutComma.trim().replace(" ", "_"));
            } else {
                setMainIngredient(mainIngredientWithoutEmoji.replace(" ", "_"));
            }
        } else {
            if (mainIngredient.includes(',')) {
                const indexOfComma = mainIngredient.indexOf(',');
                const stringWithoutComma = mainIngredient.slice(0, indexOfComma);
                setMainIngredient(stringWithoutComma.trim().replace(" ", "_"));
            } else {
                setMainIngredient(mainIngredient.trim().replace(" ", "_"));
            }
        }
    }

    return (
        sortBy === "groupedCategory" ?
            Object.keys(listToRender).map((category, index) => {
                return (
                    <section key={index}>
                        <h2 className="capitalize font-bold">{category}</h2>
                        <ul className="grid gap-y-4 w-11/12 my-6">
                            {listToRender[category].map((data, index) => {
                                return (
                                    <li className="bg-blue-900 rounded-lg p-4 w-6/12 max-w-xs cursor-pointer hover:bg-blue-600" key={index} onClick={() => mainIngredientSetter(data.name)}>
                                        <Item {...data} />
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                );
            })
            :
            < ul className="grid gap-y-4 w-11/12 my-6" >
                {
                    listToRender.map((data, index) => {
                        return (
                            <li className="bg-blue-900 rounded-lg p-4 w-6/12 max-w-xs cursor-pointer hover:bg-blue-600" key={index} onClick={() => mainIngredientSetter(data.name)}>
                                <Item {...data} />
                            </li>
                        );
                    })
                }
            </ul >
    );
};