export default {
    /*html*/
    template:`
    <table class="table table-striped">

        <tr>
            <th>Product Amount:</th>
            <td >{{orderInModal.productAmount}}</td>
        </tr>
        <tr>
            <th>Product:</th>
            <td >{{orderInModal.productId}}</td>
        </tr>
        <tr>
            <th>User:</th>
            <td >{{orderInModal.userId}}</td>
        </tr>
    </table>
    `,
    props:["orderInModal","user","product"]
}