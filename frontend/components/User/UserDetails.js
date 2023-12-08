export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{userInModal.id}}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td >{{userInModal.email}}</td>
        </tr>
        <tr>
            <th>Email</th>      
            <td >{{userInModal.name}}</td>
        </tr>
        <tr>
            <th>Phone</th>
            <td >{{userInModal.phoneNumber}}</td>
        </tr>
    </table>`,
    props:["userInModal"]
}