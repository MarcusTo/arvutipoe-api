import productList from "../components/Product/ProductList.js"
import productInfoModal from "../components/Product/ProductInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import ProductForm from "../components/Product/ProductForm.js"

export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newProduct">New Product</button>
    <product-list :key="update" @showModal="openModal" @deleteProduct="deleteProduct"></product-list>
    <product-info-modal @productUpdated="updateView" :productInModal="productInModal"></product-info-modal>
    <new-object-modal id="newProductModal" @save="saveNewProduct">
        <product-form v-model:name="productInModal.name" v-model:price="productInModal.price" 
        v-model:productAmount="productInModal.productAmount"></product-form>
        <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
    </new-object-modal>
    `,
    components: {
        productList,
        productInfoModal,
        newObjectModal,
        ProductForm,
    },
    data() {
        return {
            update: 0,
            productInModal: { id: "", name: "", price: "", productAmount:""},
            newProductModal: {},
            error:""
        }
    },
    methods: {
        openModal(product){
            this.productInModal = product
            let productInfoModal = new bootstrap.Modal(document.getElementById("productInfoModal"))
            productInfoModal.show()
        },
        newProduct() {
            this.error = ""
            this.productInModal = {}
            this.newProductModal = new bootstrap.Modal(document.getElementById("newProductModal"))
            this.newProductModal.show()
        },
        updateView(product) {
            this.update++
            this.productInModal = product
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
        }

    }
}