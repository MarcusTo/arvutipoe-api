export default {
    /*html*/
    template: `
    <table id=ordersTable class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders">
            <td @click="getOrder(order.id)">{{order.name}}</td>
            <td>{{order.email}}</td>
            <td>{{order.phoneNumber}}</td>
            <td>{{order.price}}</td>
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