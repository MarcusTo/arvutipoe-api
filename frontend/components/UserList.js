export default {
    /*html*/
    template: `
    <table id=usersTable class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users">
            <td @click="getUser(user.id)">{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phoneNumber}}</td>
        </tr>
        </tbody>
    </table>
    `,
    emits: ["showModal"],
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = await (await fetch("http://localhost:8080/users")).json()
    },
    methods: {
        getUser: async function (id) {
            const userInModal = await (await fetch(this.API_URL + "/users/" + id)).json()
            this.$emit("showModal", userInModal)
        }
    }
}