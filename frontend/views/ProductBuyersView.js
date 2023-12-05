import productBuyersList from "../components/ProductBuyersList.js"
import productBuyersInfoModal from "../components/ProductBuyers/ProductBuyersInfoModal.js"
export default {
    /*html*/
    template: `
    <productBuyer-list :key="update" @showModal="openModal"></productBuyer-list>
    <productBuyer-info-modal @productUpdated="updateView" :productBuyerInModal="productBuyerInModal"></productBuyer-info-modal>
    `,
    components: {
        productBuyersList,
        productBuyersInfoModal
    },
    data() {
        return {
            update: 0,
            productBuyerInModal: { id: "", name: "", price: ""}
        }
    },
    methods: {
        openModal(productBuyer){
            this.productBuyerInModal = productBuyer
            let productBuyerInfoModal = new bootstrap.Modal(document.getElementById("productInfoModal"))
            productBuyerInfoModal.show()
        },
        updateView(productBuyer) {
            this.update++
            this.productBuyerInModal = productBuyer
        }
    }
}