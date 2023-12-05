import userList from "../components/User/UserList.js"
import userInfoModal from "../components/User/UserInfoModal.js"
export default {
    /*html*/
    template: `
    <user-list :key="update" @showModal="openModal"></user-list>
    <user-info-modal @userUpdated="updateView" :userInModal="userInModal"></user-info-modal>
    `,
    components: {
        userList,
        userInfoModal
    },
    data() {
        return {
            update: 0,
            userInModal: { id: "", name: "", email: "", phoneNumber: ""}
        }
    },
    methods: {
        openModal(user){
            this.userInModal = user
            let userInfoModal = new bootstrap.Modal(document.getElementById("userInfoModal"))
            userInfoModal.show()
        },
        updateView(user) {
            this.update++
            this.userInModal = user
        }
    }
}