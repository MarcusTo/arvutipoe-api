export default {
    /*html*/
    template: `
    <table id="ordersTable" class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>User</th>
            <th>Product</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders">
            <td @click="getOrder(order.id)">{{ order.User.name }}</td>
            <td>{{ order.Product.name }}</td>
            <td>{{ order.price }}</td>
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
        getOrder: async function (id) {
            const orderInModal = await (await fetch(this.API_URL + "/orders/" + id)).json()
            this.$emit("showModal", orderInModal)
        }
    }
}