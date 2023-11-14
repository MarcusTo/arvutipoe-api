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
                <table class="table table-striped">
                    <tr>
                        <th>Id</th>
                        <td>{{productInModal.id}}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td v-if="isEditing"><input v-model="modifiedProduct.name"></td>
                        <td v-else>{{productInModal.name}}</td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td v-if="isEditing"><input v-model="modifiedProduct.price"></td>
                        <td v-else>{{productInModal.price}}</td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
            <template v-if="isEditing">
                <button type="button" class="btn btn-success" @click="saveModifiedProduct">Save</button>
                <button type="button" class="btn btn-secondary" @click="cancelEditing">Cancel</button>
            </template>
            <template v-else>
                <button type="button" class="btn btn-warning" @click="startEditing">Edit</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </template>
            </div>
        </div>
    </div>
</div>
    `,
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
            console.log("Saving:", this.modifiedProduct)
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
        }
    }
}