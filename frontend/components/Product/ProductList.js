export default {
    /*html*/
    template: `
    <table id="productsTable" class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Product Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products">
                <td @click="getProduct(product.id)">{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.productAmount }}</td>
                
            </tr>
        </tbody>
    </table>
    `,
    emits: ["showModal"],
    data() {
        return {
            products: []
        }
    },
    async created() {
        this.products = await (await fetch("http://localhost:8080/products")).json()
    },
    methods: {
        getProduct: async function (id) {
            const productInModal = await (await fetch(this.API_URL + "/products/" + id)).json()
            this.$emit("showModal", productInModal)
        }
    }
}