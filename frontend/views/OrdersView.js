import orderList from "../components/Order/OrderList.js"
import orderInfoModal from "../components/Order/OrderInfoModal.js"
import OrderForm from "../components/Order/OrderForm.js"
import NewObjectModal from "../components/NewObjectModal.js"

export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newOrder">New Order</button>
    <order-list :key="update" @showModal="openModal" @deleteOrder="deleteOrder">></order-list>
    <order-info-modal @Updated="updateView" :orderInModal="orderInModal"></order-info-modal>
    <new-object-modal id="newOrderModal" @save="saveNewOrder">
        <order-form v-model:name="orderInModal.name" v-model:price="orderInModal.price" 
        v-model:orderAmount="orderInModal.orderAmount"></order-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        orderList,
        orderInfoModal,
        NewObjectModal,
        OrderForm,
    },
    data() {
        return {
            update: 0,
            orderInModal: {name: "", price: "",  productAmount: ""},
            newOrderModal: {},
            error: ""
        }
    },
    methods: {
        openModal(order){
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
            const rawResponse = await fetch(this.API_URL + "/Orders/", {
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