import styles from "../PrimaryStyles.module.scss";

class Product {
    constructor({ id, name, description, price, image }) {
        this.id =  id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
};

const path = "http://localhost:8000/";

function loadProducts() {
    return fetch(`${path}api/products/`, {
        method: "GET"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network answer was not ok.");
        }
        return response.json();
    }).then((products) => {
        const productsList = [];

        for (let key in products) {
            const product = new Product({
                id: products[key].id,
                name: products[key].name,
                description: products[key].description,
                price: products[key].price,
                image: products[key].image
            });

            productsList.push(product);
        }

        return productsList;
    });
}

function loadProductById(id) {
    return fetch(`${path}api/products/${id}/`, {
        method: "GET"
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Network answer was not ok.");
        }
        return response.json();
    }).then((product) => {
        return new Product({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image
        })
    });
}

function getPrototypeProduct() {
    return new Product({
        id: `prototype`,
        name: `Protótipo`,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        price: 0.00,
        image: `https://placehold.jp/40/${styles.primaryColor.replace("#", "")}/${styles.lightColor.replace("#", "")}/300x300.png?text=no+photo`
    });
}

export { loadProducts, loadProductById, getPrototypeProduct };