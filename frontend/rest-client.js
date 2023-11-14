const app = Vue.createApp({
    data() {
        return {
            productInModal: { id: null, name: null, price: null },
            products: []
        }
    },
    async created() {
        this.products = await (await fetch("http://localhost:8080/products")).json()
    },
    methods: {
        getProduct: async function (id) {
            this.productInModal = await (await fetch("http://localhost:8080/products/" + id)).json()
            let productInfoModal = new bootstrap.Modal(document.getElementById("productInfoModal"))
            productInfoModal.show()
        }
    }
})

app.mount('#app')