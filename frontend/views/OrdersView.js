import orderList from "../components/OrderList.js"
import orderInfoModal from "../components/OrderInfoModal.js"
export default {
    /*html*/
    template: `
    <order-list :key="update" @showModal="openModal"></order-list>
    <order-info-modal @orderUpdated="updateView" :orderInModal="orderInModal"></order-info-modal>
    `,
    components: {
        orderList,
        orderInfoModal
    },
    data() {
        return {
            update: 0,
            orderInModal: { id: "", price:"" , productId:"", userId:""}
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
        }
    }
}