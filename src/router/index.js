import Vue from 'vue';
import Router from 'vue-router';


import HomePage from "@/components/pages/HomePage";
import CategoryPage from "@/components/pages/CategoryPage";
import CartPage from "@/components/pages/CartPage";
import ProductPage from "@/components/pages/ProductPage";
import PaymentPage from "@/components/pages/PaymentPage";
import FindProductsPage from "@/components/pages/FindProductsPage";

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path: '/find',
            name: 'find',
            component: FindProductsPage
        },
        {
            path: '/payment',
            name: 'payment',
            component: PaymentPage
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartPage
        },
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/:name',
            name: 'category',
            component: CategoryPage
        },
        {
            path: '/:category/:id',
            name: 'product',
            component: ProductPage
        },
    ],
    mode: 'history',
});

export default router;
