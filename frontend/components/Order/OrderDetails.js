export default {
    /*html*/
    template:`
    <table class="table table-striped">

        <tr>
            <th>Order ID:</th>
            <td >{{orderInModal.id}}</td>
        </tr>
        <tr>
            <th>Product Amount:</th>
            <td >{{orderInModal.productAmount}}</td>
        </tr>
        <tr>
            <th>Product ID:</th>
            <td >{{orderInModal.ProductId}}</td>
        </tr>
       
        <tr>
            <th>User ID:</th>
            <td >{{orderInModal.UserId}}</td>
        </tr>
    </table>
    `,
    props:["orderInModal"]
}