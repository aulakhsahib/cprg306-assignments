import Item from "./item";

export default function ItemList({ items, sortBy }) {

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

    return (
        sortBy === "groupedCategory" ?
            Object.keys(listToRender).map((category, index) => {
                return (
                    <section key={index}>
                        <h2>{category}</h2>
                        <ul className="grid gap-y-4 w-11/12 my-6 mx-auto">
                            {listToRender[category].map((data, index) => {
                                return (
                                    <li className="bg-blue-900 rounded-lg p-4 w-6/12 max-w-xs" key={index}>
                                        <Item {...data} />
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                );
            })
            :
            < ul className="grid gap-y-4 w-11/12 my-6 mx-auto" >
                {
                    listToRender.map((data, index) => {
                        return (
                            <li className="bg-blue-900 rounded-lg p-4 w-6/12 max-w-xs" key={index}>
                                <Item {...data} />
                            </li>
                        );
                    })
                }
            </ul >
    );
};


// const group = items.reduce((groupByData, item) => {
//     (!(item.category in groupByData)) && (groupByData[item.category] = []);
//     groupByData[item.category].push(item);
//     return groupByData;
// }, {})
// listToRender = Object.keys(groupedList).map((category, index) => {
//     return (
//         <section key={index}>
//             <h2>{category}</h2>
//             <ul className="grid gap-y-4 w-11/12 my-6 mx-auto">
//                 {groupedList[category].map((data, index) => {
//                     return (
//                         <li className="bg-blue-900 rounded-lg p-4 w-6/12 max-w-xs" key={index}>
//                             <Item {...data} />
//                         </li>
//                     );
//                 })}
//             </ul>
//         </section>
//     );
// });