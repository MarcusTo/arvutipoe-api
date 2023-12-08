import confirmationModal from "../ConfirmationModal.js"
import userForm from "./UserForm.js"
import userDetails from "./UserDetails.js"
export default {
    /*html*/
    template: `
<div id="userInfoModal" class="modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <user-form v-if="isEditing" v-mo v-model:name="modifiedUser.name" v-model:email="modifiedUser.email" v-model:phoneNumber="modifiedUser.phoneNumber" :isEditing="true"></user-form>
            <user-details v-else v-model:userInModal="userInModal"></user-details>
            </div>
            <div class="modal-footer">
                <div class="container">
                    <div class="row">
                        <template v-if="isEditing">
                            <div class="col me-auto">
                                <button type="button" class="btn btn-danger" data-bs-target="#confirmationModal" data-bs-toggle="modal">Delete</button>
                            </div>
                            <div class="col-auto">
                                <button type="button" class="btn btn-success mx-2" @click="saveModifiedUser">Save</button>
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
<confirmation-modal :target="'#userInfoModal'" @confirmed="deleteUser" @canceldelete="cancelEditing"></confirmation-modal>

`,
    components: {
        confirmationModal,
        userForm,
        userDetails
    },
    emits: ["userUpdated"],
    props: {
        userInModal: {}
    },
    data() {
        return {
            isEditing: false,
            modifiedUser: {}
        }
    },
    methods: {
        startEditing() {
            this.modifiedUser = { ...this.userInModal }
            this.isEditing = true
        },
        cancelEditing() {
            this.isEditing = false
        },
        async saveModifiedUser() {
            console.log("Saving:", this.modifiedUser);
            const rawResponse = await fetch(this.API_URL + "/users/" + this.modifiedUser.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.modifiedUser)
            });
            console.log(rawResponse);
            this.$emit("userUpdated", this.modifiedUser)
            this.isEditing = false
        },
        deleteUser() {
            console.log("Deleting:", this.userInModal);
            fetch(this.API_URL + "/users/" + this.userInModal.id, {
                method: 'DELETE'
            });
                this.$emit("userUpdated",{})
                this.isEditing = false
        }
        
    }
}