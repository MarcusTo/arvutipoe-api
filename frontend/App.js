import productsList from "./components/ProductList.js"
import productInfoModal from "./components/ProductInfoModal.js"
export default {
    /*html*/
    template: `
    <products-list :key="update" @showModal="openModal"></products-list>
    <product-info-modal @productUpdated="updateView" :productInModal="productInModal"></product-info-modal>
    `,
    components: {
        productsList,
        productInfoModal
    },
    data() {
        return {
            update: 0,
            productInModal: { id: "", name: "", price: "" }
        }
    },
    methods: {
        openModal(product) {
            this.productInModal = product
            let productInfoModal = new bootstrap.Modal(document.getElementById("productInfoModal"))
            productInfoModal.show()
        },
        updateView(product) {
            this.update++
            this.productInModal = product
        }
    }
}