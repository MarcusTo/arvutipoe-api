export default {
  /*html*/
  template: `
    <table class="table table-striped">

      <tr>
        <th>Product Amount:</th>
        <td><input type="number" :value="productAmount" @input="$emit('update:productAmount',$event.target.value)"></td>
      </tr>

      <tr>
        <th>User:</th>
        <td>
            <select :value="UserId" @input="$emit('update:UserId',$event.target.value)">
                <option v-for="user in users" :value="user.id">{{user.name}}</option>
            </select>
        </td>
      </tr>
      <tr>
        <th>Product:</th>
        <td>
            <select :value="ProductId" @input="$emit('update:ProductId',$event.target.value)">
                <option v-for="product in products" :value="product.id">{{product.name}}</option>
            </select>
        </td>
      </tr>
    </table>
  `,
  props: ["id", "price", "productAmount", "UserId", "ProductId","productName","userName" ],
  emits: ["update:id", "update:price", "update:productAmount", "update:UserId","userName", "update:ProductId","productName"  ],
  data() {
    return{
      users: [],
      products: []
    }
},
  async created() {
    this.users  = await (await fetch("http://localhost:8080/users")).json()
    this.products = await (await fetch("http://localhost:8080/products")).json()
  }
};