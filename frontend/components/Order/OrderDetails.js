export default {
    /*html*/
    template:`
    <table class="table table-striped">
        <tr>
            <th>Id</th>
            <td>{{orderInModal.id}}</td>
        </tr>
        <tr>
            <th>User Id</th>
            <td >{{orderInModal.userId}}</td>
        </tr>
        <tr>
            <th>Product Id</th>      
            <td >{{orderInModal.productId}}</td>
        </tr>
        <tr>
            <th>Price</th>
            <td >{{orderInModal.price}}</td>
        </tr>
        <tr>
            <th>Product Amount</th>
            <td >{{orderInModal.productAmount}}</td>
        </tr>
    </table>
    `,
    props:["orderInModal"]
}