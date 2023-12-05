import confirmationModal from "../ConfirmationModal.js"
import ProductForm from "./ProductForm.js"
import ProductDetails from "./ProductDetails.js"
export default {
    /*html*/
    template: `
<div id="productInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <product-form v-if="isEditing" v-model:id="modifiedProduct.id" v-model:name="modifiedProduct.name" v-model:price="modifiedProduct.price" v-model:productAmount="modifiedProduct.productAmount"></product-form>
            <product-details v-else :productInModal="productInModal"></product-details>
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
        confirmationModal,
        ProductForm,
        ProductDetails
    },
    emits: ["productUpdated"],
    props: {
        productInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedProduct: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedProduct = { ...this.productInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedProduct() {
            console.log("Saving:", this.modifiedProduct);
            const rawResponse = await fetch(this.API_URL + "/products/" + this.modifiedProduct.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedProduct)
            });
            console.log(rawResponse);
            this.$emit("productUpdated", this.modifiedProduct)
            this.isEditing = false
        },
        deleteProduct() {
            console.log("DELETE confirmed");
        }
    }
}