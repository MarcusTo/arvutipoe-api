export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{orderInModal.Id}}</td>
        </tr>
        <tr>
            <th>Order Price:</th>
            <td >{{orderInModal.price}}</td>
        </tr>
        <tr>
            <th>Product Amount:</th>
            <td >{{orderInModal.productAmount}}</td>
        </tr>
        <tr>
            <th>User</th>
            <td >{{user}}</td>
        </tr>
        <tr>
            <th>Product</th>
            <td >{{product}}</td>
        </tr>
    </table>
    `,
    props:["orderInModal","user","product"]
}