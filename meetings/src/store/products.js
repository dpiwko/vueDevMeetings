import productsService from '../services/products'

const namespaced = true

const state = {
    products: [],
    page: 1
}

// getters
const getters = {
    products: (state) => state.products
}

// actions
const actions = {
    getProducts({ commit, state }) {
        return productsService
            .getProducts(null, state.page * 10)
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
    },
    loadMore({ commit, state, dispatch }, page = null) {
        commit('setNextPage', page || state.page + 1)
        dispatch('getProducts')
    }
}

// mutations
const mutations = {
    setProducts(state, products) {
        state.products = products
    },

    setNextPage(state, page) {
      state.page = page
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}