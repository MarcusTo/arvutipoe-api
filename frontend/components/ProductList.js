export default {
    /*html*/
    template: `
    <table id="productsTable" class="table table-striped table-bordered">
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        <tr v-for="product in products">
            <td @click="getProduct(product.id)">{{ product.name }}</td>
            <td>{{ product.price }}</td>
        </tr>
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
            const productInModal = await (await fetch("http://localhost:8080/products/" + id)).json()
            console.log("ProductsList: ", productInModal)
            this.$emit("showModal", productInModal)
        }
    }
}