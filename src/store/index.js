import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

const productsQuery = axios.get('http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6');


export default new Vuex.Store({
    namespace: true,
    state: {
        modal: false,
        cart: [],
        products: [],
        search: '',
        header: ''
    },
    getters: {
        getModalState(state) {
            return state.modal;
        },
        getHeader(state) {
            return state.header;
        },
        getProducts(state) {
            if (state.products.length !== 0)
                return state.products;
        },
        getCart(state) {
            return state.cart;
        },
        getCartCount(state) {
            let couter = 0;
            state.cart.forEach(item => couter += item.count);
            return couter;
        },
        getProductByID(state) {
            return (id) => state.products.filter(item => item.product.id === id);
        },
        getProductsByName(state) {
            return (name) => state.products.filter(item => item.product.product_name.toLowerCase().includes(name))
        },
        getProductsByCategory(state) {
            return (categoryID) => state.products.filter(item => item.category === categoryID);
        },
        getSearchText(state) {
            return state.search;
        }
    },
    actions: {
        changeModalState(context) {
            context.commit('setModalState', {state: !context.getters.getModalState});
        },

        setSearchText(context, payload) {
            context.commit('setSearchText', {text: payload.search})
        },

        setHeader(context, payload) {
            context.commit('setHeader', {header: payload.header});
        },

        fetchProducts(context) {
            if (context.state.products.length === 0) {
                productsQuery.then(json => {
                    json.data.forEach(item => {

                        let annotation=['','Sale','New'];

                        context.commit('addProduct', {product: item, category: Math.floor((Math.random() * 11) + 1), annotation: annotation[Math.floor((Math.random() * 3))]});
                    })
                })
            }
        },

        addProductToCart(context, payload) {
            context.commit('addToCart', {product: payload.product});
        },

        removeProductFromCart(context, payload) {
            context.commit('removeFromCart', {id: payload.id})
        },
    },
    mutations: {

        setModalState(state, payload) {
            state.modal = payload.state;
        },

        setSearchText(state, payload) {
            state.search = payload.text;
        },

        setHeader(state, payload) {
            state.header = payload.header;
        },

        addProduct(state, payload) {
            state.products.push({product: payload.product, category: payload.category, annotation: payload.annotation});
        },

        addToCart(state, payload) {
            let position = state.cart.findIndex(item => payload.product.product.id === item.product.product.id);
            if (position === -1) {
                state.cart.push({product: payload.product, count: 1});
            } else {
                state.cart[position].count++;
            }
        },

        removeFromCart(state, payload) {
            let position = state.cart.findIndex(item => payload.id === item.product.product.id);
            if (state.cart[position].count === 1)
                state.cart.splice(position, 1);
            else
                state.cart[position].count--;
        }

    }

})
;
