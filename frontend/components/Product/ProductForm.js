export default {
    /*html*/
    template: `
    <table class="table table-striped">
    <tr>
        <th>Product Name:</th>
        <td><input type="text" :value="name" @input="$emit('update:name',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Product Price:</th>
        <td><input type="number" :value="price" @input="$emit('update:price',$event.target.value)"></td>
    </tr>
    <tr>
        <th>Product Amount:</th>
        <input type="number" :value="productAmount" @input="$emit('update:productAmount', $event.target.value)">
    </tr>

</table>`,
    props: ["id", "name", "price", "productAmount"],
    emits: ["update:name", "update:price","update:productAmount"]
}