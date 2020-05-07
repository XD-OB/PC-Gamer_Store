import ProductsData from './products.json';

export function getAll() {
    return Promise.resolve(ProductsData);
}

export function getById(id) {
    const product = ProductsData.find(item => item.id === id);
    return Promise.resolve(product);
}

export default {
    getAll,
    getById
}