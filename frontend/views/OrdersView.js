import orderList from "../components/Order/OrderList.js"
import orderInfoModal from "../components/Order/OrderInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import orderForm from "../components/Order/OrderForm.js"
export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newOrder">New Order</button>
    <order-list :key="update" @showModal="openModal"></order-list>
    <order-info-modal @orderUpdated="updateView" :orderInModal="orderInModal"></order-info-modal>
    <new-object-modal id="newOrderModal" @save="saveNewOrder">
        <order-form v-model:productAmount="orderInModal.productAmount" v-model:productId="orderInModal.productId" v-model:userId="orderInModal.userId"></order-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        orderList,
        orderInfoModal,
        newObjectModal,
        orderForm
    },
    data() {
        return {
            update: 0,
            orderInModal: { productAmount:"", productId: "", userId: ""},
            newOrderModal: {},
            error: ""
        }
    },
    methods: {
        openModal(order) {
            this.orderInModal = order
            let orderInfoModal = new bootstrap.Modal(document.getElementById("orderInfoModal"))
            orderInfoModal.show()
        },
        newOrder() {
            this.error = ""
            this.orderInModal = {}
            this.newOrderModal = new bootstrap.Modal(document.getElementById("newOrderModal"))
            this.newOrderModal.show()
        },
        updateView(order) {
            this.update++
            this.orderInModal = order
        },
        async saveNewOrder() {
            console.log("Saving:", this.orderInModal)
            const rawResponse = await fetch(this.API_URL + "/orders/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.orderInModal)
            });
            if (rawResponse.ok) {
                this.newOrderModal.hide()
                this.update++
            }
            else {
                const errorResponse = await rawResponse.json()
                this.error = errorResponse.error
            }
        }
    }
}