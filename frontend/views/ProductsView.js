import productList from "../components/Product/ProductList.js"
import productInfoModal from "../components/Product/ProductInfoModal.js"
import newObjectModal from "../components/NewObjectModal.js"
import productForm from "../components/Product/ProductForm.js"

export default {
    /*html*/
    template: `
    <button class="btn btn-secondary" @click="newProduct">New Product</button>
    <product-list :key="update" @showModal="openModal" @deleteProduct="deleteProduct">></product-list>
    <product-info-modal @Updated="updateView" :productInModal="productInModal"></product-info-modal>
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
        productForm,
        
    },
    //data() {
    //    return {
    //        update: 0,
    //        productInModal: { id: "", name: "", price: "",  productAmount: ""},
    //        newBarberModal: {},
    //       error: ""
    //    }
    //},
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
        async saveNewProduct() {
            console.log("Saving:", this.productInModal)
            const rawResponse = await fetch(this.API_URL + "/products/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.productInModal)
            });
            if (rawResponse.ok) {
                this.newProductModal.hide()
                this.update++
            }
            else {
                const errorResponse = await rawResponse.json()
                this.error = errorResponse.error
            }
        }
    }
}