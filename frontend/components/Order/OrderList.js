export default {
    /*html*/
    template: `
    <table id="ordersTable" class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Order ID:</th>
            <th>Product amount:</th>
            <th>Product ID:</th> 
            <th>Product Name:</th>
            <th>User ID:</th> 
            <th>User Name:</th>


        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders">
            <td @click="getOrder(order.id)">{{ order.id}}</td>
            <td>{{ order.productAmount}}</td>
            <td>{{ order.ProductId }}</td>
            <td>{{ order.Product.name }}</td>
            <td>{{ order.UserId}}</td>
            <td>{{ order.User.name}}</td>

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
        console.log(this.orders)
    },
    methods: {
        getOrder: async function (id) {
            const orderInModal = await (await fetch(this.API_URL + "/orders/" + id)).json()
            this.$emit("showModal", orderInModal)
        }
    }
}