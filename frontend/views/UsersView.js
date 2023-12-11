// import userList from "../components/User/UserList.js"
// import userInfoModal from "../components/User/UserInfoModal.js"
// import newObjectModal from "../components/NewObjectModal.js"
// import userForm from "../components/User/UserForm.js"

// export default {
//     /*html*/
//     template: `
//     <button class="btn btn-secondary" @click="newUser">New User</button>
//     <user-list :key="update" @showModal="openModal" @deleteUser="deleteUser">></user-list>
//     <user-info-modal @Updated="updateView" :userInModal="userInModal"></user-info-modal>
//     <new-object-modal id="newUserModal" @save="saveNewUser">
//         <user-form v-model:email="userInModal.email" v-model:name="userInModal.name" 
//         v-model:phoneNumber="userInModal.phoneNumber"></user-form>
//         <div class="alert alert-danger" role="alert" v-show="error">{{error}}</div>
//     </new-object-modal>
//     `,
//     components: {
//         userList,
//         userInfoModal,
//         newObjectModal,
//         userForm,
        
//     },
//     data() {
//         return {
//             update: 0,
//             userInModal: { id: "", email: "", name: "",  phoneNumber: ""}
//         }
//     },
//     methods: {
//         openModal(user){
//             this.userInModal = user
//             let userInfoModal = new bootstrap.Modal(document.getElementById("userInfoModal"))
//             userInfoModal.show()
//         },
//         newUser() {
//             this.error = ""
//             this.userInModal = {}
//             this.newUserModal = new bootstrap.Modal(document.getElementById("newUserModal"))
//             this.newUserModal.show()
//         },
//         updateView(user) {
//             this.update++
//             this.userInModal = user
//         },
//         async saveNewUser() {
//             console.log("Saving:", this.userInModal)
//             const rawResponse = await fetch(this.API_URL + "/users/", {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(this.userInModal)
//             });
//             if (rawResponse.ok) {
//                 this.newUserModal.hide()
//                 this.update++
//             }
//             else {
//                 const errorResponse = await rawResponse.json()
//                 this.error = errorResponse.error
//             }
//         }
//     }
// }