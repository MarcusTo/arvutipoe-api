export default{
    /*html*/
    template: `
    <table class="table table-striped">

    <tr>
        <td>{{id}}</td>
    </tr>
    <tr>
        <th>Product ID:</th>
        <input type="number" :value="productId" @input="$emit('update:productId', $event.target.value)">
    </tr>

    <tr>
        <td>{{price}}</td>
    </tr>

    <tr>
        <th>Product Amount:</th>
        <td><input type="number" :value="productAmount" @input="$emit('update:productAmount',$event.target.value)"></td>
    </tr>
</table>
    `,
    props: ["id", "userId","productId","price","productAmount"],
    emits: ["update:id","update:userId","update:productId","update:price","update:productAmount"]
}