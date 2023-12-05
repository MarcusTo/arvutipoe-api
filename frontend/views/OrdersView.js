import orderList from "../components/Order/OrderList.js"
import orderInfoModal from "../components/Order/OrderInfoModal.js"
export default {
    /*html*/
    template: `
    <order-list :key="update" @showModal="openModal"></order-list>
    <button class="btn btn-secondary" @click="newOrder">New Order</button>
    <order-info-modal @orderUpdated="updateView" :orderInModal="orderInModal"></order-info-modal>
    `,
    components: {
        orderList,
        orderInfoModal
    },
    data() {
        return {
            update: 0,
            orderInModal: { id: "", price:"", productAmount:"", productId:"", userId:""}
        }
    },
    methods: {
        openModal(order){
            this.orderInModal = order
            let orderInfoModal = new bootstrap.Modal(document.getElementById("orderInfoModal"))
            orderInfoModal.show()
        },
        updateView(order) {
            this.update++
            this.orderInModal = order
        },
        newOrder(order){

        }
    }
}