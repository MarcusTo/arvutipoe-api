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
            <select :value="userId" @input="$emit('update:userId',$event.target.value)">
                <option v-for="user in users" :value="user.id">{{user.name}}</option>
            </select>
        </td>
      </tr>
      <tr>
        <th>Product:</th>
        <td>
            <select :value="productId" @input="$emit('update:productId',$event.target.value)">
                <option v-for="product in products" :value="product.id">{{product.name}}</option>
            </select>
        </td>
      </tr>
    </table>
  `,
  props: ["id", "price", "productAmount", "userId", "productId" ],
  emits: ["update:id", "update:price", "update:productAmount", "update:userId", "update:productId"  ],
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