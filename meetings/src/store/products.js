import productsService from '../services/products'

const namespaced = true

const state = {
    products: []
}

// getters
const getters = {
    products: (state) => state.products
}

// actions
const actions = {
    getProducts({ commit, state }) {
        return productsService
            .getProducts()
            .then((data) => {
                commit('setProducts', data)

                return data
            })
            .catch((err) => {
                alert(err)
            })
    },
    searchProducts({ commit }, query) {
        return productsService
            .searchProducts(query)
            .then((data) => {
                commit('setProducts', data)

                return data  
            })
            .catch((err) => {
                alert(err)
            })
    },
    removeProduct({ state }, id) {
        state.products.forEach((product, index) => {
            if (product.ProductId === id) {
                state.products.splice(index, 1)
            }
        })
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}