export default function ProductCard ({product, addToCard}) {
    const products = [
    {id: 1, name: 'Товар 1', price: 10, image: 'https://envybox.io/blog/wp-content/uploads/2023/07/IMG_3505.jpg'},
    {id: 2, name: 'Товар 2', price: 20, image: 'https://envybox.io/blog/wp-content/uploads/2023/07/IMG_3505.jpg'},
];

    return(
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price} руб.</p>
            <button onClick={() => addToCard(product)}>Добавить товар</button>
        </div>
    )
}