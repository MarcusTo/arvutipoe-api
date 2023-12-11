export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Order ID:</th>
            <td>{{orderInModal.orderId}}</td>
        </tr>
        <tr>
            <th>User ID:</th>
            <td >{{orderInModal.userId}}</td>
        </tr>
        <tr>
            <th>Product ID:</th>      
            <td >{{orderInModal.productId}}</td>
        </tr>
        <tr>
            <th>Order Price:</th>
            <td >{{orderInModal.price}}</td>
        </tr>
        <tr>
            <th>Product Amount:</th>
            <td >{{orderInModal.productAmount}}</td>
        </tr>
    </table>
    `,
    props:["orderInModal"]
}