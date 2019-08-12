import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const products=axios.get('http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6');

export default new Vuex.Store({
    namespace:true,
    state: {
        modal:false, //czy wyświetlić okno modalne
        cart:[], //produkty w koszyku
        products:[],//spis wszystkich produktów

    },
    getter: {
        getModalState(context){
            return context.state.modal;
        },
        getProducts(context){
            return context.state.products;
        }
    },
    actions: {
        setModalState(context){
            context.commit('setModalState',{state: !context.getter.getModalState});
        },

        fetchProducts(context){
            products.forEach(item=> {
                context.commit('addProduct',{product: item});
            })
        }
    },
    mutations: {
        setModalState(state, payload) {
            state.modal = payload.state;
        },

        addProduct(state, payload){
            state.products.push(payload.product);
        }
    }

});
