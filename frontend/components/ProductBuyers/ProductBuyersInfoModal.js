import confirmationModal from "../ConfirmationModal.js"

export default {
    /*html*/
    template: `
<div id="productBuyersInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <td>{{productBuyersInfoModal.id}}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td v-if="isEditing"><input v-model="modifiedProduct.name"></td>
                        <td v-else>{{productBuyersInfoModal.product.price}}</td>
                    </tr>
                    <tr>
                        <th>Product Amount</th>
                        <td v-if="isEditing"><input v-model="modifiedProduct.price"></td>
                        <td v-else>{{productBuyersInfoModal.product.price}}</td>
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
<confirmation-modal :target="'#productInfoModal'" @confirmed="deleteProduct"></confirmation-modal>
    `,
    components: {
        confirmationModal
    },
    emits: ["productBuyersUpdated"],
    props: {
        productBuyersInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedProductBuyers: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedProductBuyers = { ...this.productBuyersInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedProduct() {
            console.log("Saving:", this.modifiedProductBuyers);
            const rawResponse = await fetch(this.API_URL + "/productsBuyers/" + this.modifiedProductBuyers.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedProductBuyers)
            });
            console.log(rawResponse);
            this.$emit("productUpdated", this.modifiedProductBuyers)
            this.isEditing = false
        },
        deleteProduct() {
            console.log("DELETE confirmed");
        }
    }
}