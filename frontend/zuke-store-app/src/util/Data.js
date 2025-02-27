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
        description: `Isto é um protótipo`,
        price: 0.00,
        image: `https://placehold.jp/40/e22e2d/ffffff/275x275.png?text=no+photo`
    });
}

export { loadProducts, loadProductById, getPrototypeProduct };