import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const productsQuery = axios.get('http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6');

export default new Vuex.Store({
    namespace: true,
    state: {
        modal: false, //czy wyświetlić okno modalne
        cart: [], //produkty w koszyku
        products: [],//spis wszystkich produktów

    },
    getters: {
        getModalState(state) {
            return state.modal;
        },
        getProducts(state) {
            if (state.products.length !== 0)
                return state.products;
        },
        getCart(state){
            return state.cart;
        },
        getCartCount(state){
            return state.cart.length;
        }
    },
    actions: {
        changeModalState(context) {
            context.commit('setModalState', {state: !context.getter.getModalState});
        },

        fetchProducts(context) {
            if (context.state.products.length === 0)
            productsQuery.then(json => {
                json.data.forEach(item => {
                    context.commit('addProduct', {product: item});
                })
            })
        },

        addProductToCart(context, payload){
            context.commit('addToCart',{product:payload.product});
        },
    },
    mutations: {
        setModalState(state, payload) {
            state.modal = payload.state;
        },

        addProduct(state, payload) {
            state.products.push(payload.product);
        },

        addToCart(state, payload){
            state.cart.push(payload.product);
        },

        removeFromCart(state, payload){
            let position = state.cart.findIndex(item => payload.product.id === item.id);
            state.cart.splice(position, 1);
        }

    }

});
