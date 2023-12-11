export default {
    /*html*/
    template: `
    <table id=ordersTable class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>User ID:</th>
            <th>Order ID:</th>
            <th>Product ID:</th>
            <th>Order Price:</th>
            <th>Product Amount:</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders">
            <td @click="getOrder(order.id)">{{order.id}}</td>
            <td>{{order.userId}}</td>
            <td>{{order.productId}}</td>
            <td>{{order.price}}</td>
            <td>{{order.productAmount}}</td>
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
        this.orders = await (await fetch("http://localhost:8080/orders")).json()
    },
    methods: {
        getUser: async function (id) {
            const orderInModal = await (await fetch(this.API_URL + "/orders/" + id)).json()
            this.$emit("showModal", orderInModal)
        }
    }
}