import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.js'

import ProductsView from './views/ProductsView.js'

import UsersView from './views/UsersView.js'
import OrdersView from './views/OrdersView.js'

const routes = [
    {path: "/products", component: ProductsView},
    {path: "/users", component: UsersView},
    {path: "/orders", component: OrdersView},
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})
const app = createApp(App)

app.use(router)

app.config.globalProperties.API_URL = 'http://localhost:8080'
app.mount('#app')