export default {
    /*html*/
    template: `
    <table id="ordersTable" class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Product amount:</th>
            <th>Product ID:</th>
            <th>User ID:</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders">
            <td @click="getOrder(order.id)">{{ order.productAmount}}</td>
            <td>{{ order.productId }}</td>
            <td>{{ order.userId }}</td>


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