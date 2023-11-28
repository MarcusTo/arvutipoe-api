import invoiceList from "../components/InvoiceList.js"
import invoiceInfoModal from "../components/InvoiceInfoModal.js"
export default {
    /*html*/
    template: `
    <invoice-list :key="update" @showModal="openModal"></invoice-list>
    <invoice-info-modal @productUpdated="updateView" :productInModal="invoiceInModal"></invoice-info-modal>
    `,
    components: {
        invoiceList,
        invoiceInfoModal
    },
    data() {
        return {
            update: 0,
            invoiceInModal: { id: "", price: "", userId: ""}
        }
    },
    methods: {
        openModal(invoice){
            this.invoiceInModal = invoice
            let invoiceInfoModal = new bootstrap.Modal(document.getElementById("invoiceInfoModal"))
            invoiceInfoModal.show()
        },
        updateView(invoice) {
            this.update++
            this.productInModal = invoice
        }
    }
}