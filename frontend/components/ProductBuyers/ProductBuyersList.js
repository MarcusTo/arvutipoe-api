export default {
    /*html*/
    template: `
    <table id=productBuyersTable class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Id</th>
            <th>Price</th>
            <th>Product Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="productBuyer in productBuyers">
            <td @click="getProductBuyers(productBuyers.id)">{{productBuyers.id}}</td>
            <td>{{productBuyers.product.productId}}</td>
            <td>{{productBuyers.product.price}}</td>
            <td>{{productBuyers.product.productAmount}}</td>
        </tr>
        </tbody>
    </table>
    `,
    emits: ["showModal"],
    data() {
        return {
            orders: []
        }
    },
    async created() {
        this.orders = await (await fetch("http://localhost:8080/ProductBuyers")).json()
    },
    methods: {
        getUser: async function (id) {
            const orderInModal = await (await fetch(this.API_URL + "/ProductBuyers/" + id)).json()
            this.$emit("showModal", orderInModal)
        }
    }
}