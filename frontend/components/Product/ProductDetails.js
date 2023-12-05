export default {
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{productInModal.id}}</td>
    </tr>
    <tr>
        <th>Name</th>
        <td>{{productInModal.name}}</td>
    </tr>
    <tr>
        <th>Price</th>
        <td>{{productInModal.price}}</td>
    </tr>
    <tr>
        <th>Product Amount</th>
        <td>{{productInModal.productAmount}}</td>
    </tr>
</table>`,
    props: ["productInModal"]
}