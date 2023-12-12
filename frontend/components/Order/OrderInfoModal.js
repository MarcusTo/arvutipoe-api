import confirmationModal from "../ConfirmationModal.js"
import orderForm from "./OrderForm.js"
import orderDetails from "./OrderDetails.js"
export default {
    /*html*/
    template: `
<div id="orderInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <order-form v-if="isEditing" v-model:id="modifiedOrder.id" v-model:price="modifiedOrder.price"
                 v-model:userId="modifiedOrder.userId" v-model:userName="modifiedOrder.userName" v-model:productAmount="modifiedOrder.productAmount" v-model:productId="modifiedOrder.productId" v-model:productName="modifiedOrder.productName" ></order-form>
                <order-details v-else :orderInModal="orderInModal" :user="userName" :product="productName"></order-details>
            </div>
            <div class="modal-footer">
                <div class="container">
                    <div class="row">
                        <template v-if="isEditing">
                            <div class="col me-auto">
                                <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal" data-bs-toggle="modal">Delete</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success mx-2" @click="saveModifiedOrder">Save</button>
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
<confirmation-modal :target="'#orderInfoModal'" @confirmed="deleteOrder"></confirmation-modal>
    `,
    components: {
        confirmationModal,
        orderForm,
        orderDetails
    },
    emits: ["orderUpdated"],
    props: {
        orderInModal: {}
    },
    computed: {
        userName:{
            get(){
                const user = this.users.find(user => user.id == this.orderInModal.userId)
                if(user) return user.name
                return "";
            }
        },
        productName:{
            get(){
                const product = this.products.find(product => product.id == this.orderInModal.productId)
                if(product) return product.name
                return "";
            }
        }
    },
    async created() {
        this.users  = await (await fetch("http://localhost:8080/users")).json()
        this.products = await (await fetch("http://localhost:8080/products")).json()
    },
    // data() {
    //     return {
    //         isEditing: false,
    //         modifiedOrder: {},
    //         users: [],
    //         products: []
    //     }
    },
    methods: {
        startEditing() {
            this.modifiedOrder = { ...this.orderInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedOrder() {
            console.log("Saving:", this.modifiedOrder)
            const rawResponse = await fetch(this.API_URL + "/orders/" + this.modifiedOrder.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedOrder)
            });
            console.log(rawResponse);
            this.$emit("orderUpdated", this.modifiedOrder)
            this.isEditing = false
        },
        deleteOrder() {
            console.log("DELETE confirmed");
            fetch(this.API_URL + "/orders/" + this.orderInModal.id, {
                method: 'DELETE'
            });
            this.$emit("orderUpdated", {})
            this.isEditing = false
        }
    }
    }