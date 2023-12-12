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
            <td >{{orderInModal.productId}}</td>
        </tr>
        <tr>
            <th>Product Name:</th>
            <td >{{orderInModal.productName}}</td>
        </tr>
        <tr>
            <th>User ID:</th>
            <td >{{orderInModal.userId}}</td>
        </tr>
        <tr>
            <th>User Name:</th>
            <td >{{orderInModal.userName}}</td>
        </tr>

    </table>
    `,
    props:["orderInModal","user","product"]
}