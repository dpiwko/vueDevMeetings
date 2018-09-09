const endpoints = {
    getProducts: 'http://localhost:3000/products',
    searchProducts: 'http://localhost:3000/products',
    deleteProduct: 'http://localhost:3000/products'
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
    },
    deleteProduct(id) {
        return fetch(`${endpoints.deleteProduct}/${id}`, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            })
        })
        .then((response) => response.json())
    }
}