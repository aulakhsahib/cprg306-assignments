export default function Item({ name, quantity, category }) {
    return (
        <>
            <p className="font-bold text-xl">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </>
    );
};
