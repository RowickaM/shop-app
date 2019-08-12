import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import temp from './temp';


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
            let couter=0;
            state.cart.forEach(item=>couter+= item.count);
            return couter;
        }
    },
    actions: {
        changeModalState(context) {
            context.commit('setModalState', {state: !context.getters.getModalState});
        },

        fetchProducts(context) {
            if (context.state.products.length === 0) {
                productsQuery.then(json => {
                    json.data.forEach(item => {
                        context.commit('addProduct', {product: item});
                    })
                })
            }
        },

        addProductToCart(context, payload){
            context.commit('addToCart',{product:payload.product});
        },
        setTempCart(context){
            let tab = temp;
            context.commit('setTempCart',{tab:tab});
        }
    },
    mutations: {
        setTempCart(state, payload){
            state.cart = payload.temp;
        },

        setModalState(state, payload) {
            state.modal = payload.state;
        },

        addProduct(state, payload) {
            state.products.push(payload.product);
        },

        addToCart(state, payload){
            let position = state.cart.findIndex(item => payload.product.id === item.product.id);

            if (position===-1) {
                state.cart.push({product: payload.product, count: 1});
            }
            else {
                state.cart[position].count++;
            }
        },

        removeFromCart(state, payload){
            let position = state.cart.findIndex(item => payload.product.id === item.id);
            console.log(position);
            if(state.cart[position].count === 1)
                state.cart.splice(position, 1);
            else
                state.cart[position].count--;
        }

    }

});
