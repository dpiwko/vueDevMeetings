const endpoints = {
    getProducts: 'http://localhost:3000/products'
}

export default {
    getProducts(page = 1, limit = 10) {
        return fetch(`${endpoints.getProducts}?_page=${page}&_limit=${limit}`, {
            method: 'GET',
            credentials: 'same-origin',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            })
        })
        .then((response) => response.json())
    }
}