export default{
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Id</th>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>User Id</th>
        <td>{{userId}}</td>
    </tr>
    <tr>
        <th>Product Id</th>
        <td>{{productId}}</td>
    </tr>
    <tr>
        <th>Price</th>
        <td ><input :value="price" @input="$emit('update:price',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Product Amount</th>
        <td><input :value="productAmount" @input="$emit('update:productAmount',$event.target.value)"></td>
    </tr>
</table>
    `,
    props: ["id","userId","productId","price","productAmount"],
    emits: ["update:id","update:userId","update:productId","update:price","update:productAmount"]
}