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
    getProducts({ commit }) {
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