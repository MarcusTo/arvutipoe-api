import confirmationModal from "./ConfirmationModal.js"

export default {
    /*html*/
    template: `
<div id="invoiceInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <td>{{invoiceInModal.id}}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td v-if="isEditing"><input v-model="modifiedInvoice.user.name"></td>
                        <td v-else>{{invoiceInModal.user.name}}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td v-if="isEditing"><input v-model="modifiedInvoice.user.email"></td>
                        <td v-else>{{invoiceInModal.user.email}}</td>
                    </tr>
                    <tr>
                        <th>Phone Number</th>
                        <td v-if="isEditing"><input v-model="modifiedInvoice.name"></td>
                        <td v-else>{{invoiceInModal.user.phoneNumber}}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td v-if="isEditing"><input v-model="modifiedInvoice.price"></td>
                        <td v-else>{{invoiceInModal.price}}</td>
                    </tr>
                </table>
            </div>

            <div class="modal-footer">
                <div class="container">
                    <div class="row">
                        <template v-if="isEditing">
                            <div class="col me-auto">
                                <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal" data-bs-toggle="modal">Delete</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success mx-2" @click="saveModifiedProduct">Save</button>
                                <button type="button" class="btn btn-secondary" @click="cancelEditing">Cancel</button>
                            </div>
                        </template>
                        <template v-else>
                            <div class="col me-auto"></div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-warning mx-2" @click="startEditing">Edit</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<confirmation-modal :target="'#modifiedInvoice'" @confirmed="deleteInvoice"></confirmation-modal>
    `,
    components: {
        confirmationModal
    },
    emits: ["invoiceUpdated"],
    props: {
        invoiceInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedInvoice: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedInvoice = { ...this.invoiceInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedInvoice() {
            console.log("Saving:", this.modifiedInvoice);
            const rawResponse = await fetch(this.API_URL + "/invoices/" + this.modifiedInvoice.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedInvoice)
            });
            console.log(rawResponse);
            this.$emit("invoiceUpdated", this.modifiedInvoice)
            this.isEditing = false
        },
        deleteInvoice() {
            console.log("DELETE confirmed");
        }
    }
}