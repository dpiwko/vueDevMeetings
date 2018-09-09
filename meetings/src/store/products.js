import productsService from '../services/products'

const namespaced = true

const state = {
    products: []
}

const getters = {
    products: (state) => state.products
}

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
    }
}

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