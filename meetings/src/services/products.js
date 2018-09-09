const endpoints = {
    getProducts: 'http://localhost:3000/products',
    searchProducts: 'http://localhost:3000/products'
}

export default {
    getProducts(page = 1, limit = 10) {
        return fetch(`${endpoints.getProducts}?_page=${page}&_limit=${limit}`, {
            method: 'GET'
        })
        .then((response) => response.json())
    },
    searchProducts(query = '') {
        return fetch(`${endpoints.searchProducts}?q=${query}`, {
            method: 'GET'
        })
        .then((response) => response.json())
    }
}