export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>User ID:</th>
            <td>{{userInModal.id}}</td>
        </tr>
        <tr>
            <th>User Email:</th>
            <td >{{userInModal.email}}</td>
        </tr>
        <tr>
            <th>User Name:</th>      
            <td >{{userInModal.name}}</td>
        </tr>
        <tr>
            <th>User Phonenumber:</th>
            <td >{{userInModal.phoneNumber}}</td>
        </tr>
    </table>`,
    props:["userInModal"]
}