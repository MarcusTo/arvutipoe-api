export default {
  /*html*/
  template: `
    <table class="table table-striped">

      <tr>
        <td>{{id}}</td>
      </tr>

      <tr>
      <th>User ID:</th>
        <td>
        <select v-model="userId" @change="$emit('update:userId', userId)">
        <option v-for="user in userList" :key="user.id" :value="user.id">{{ order.userId }}</option></select>
        </td>
      </tr>

      <tr>
        <th>Product ID:</th>
        <td>
          <select v-model="productId" @change="$emit('update:productId', productId)">
            <option v-for="product in productList" :key="product.id" :value="product.id">{{ product.id }}</option>
          </select>
        </td>
      </tr>

      <tr>
        <td>{{price}}</td>
      </tr>

      <tr>
        <th>Product Amount:</th>
        <td><input type="number" :value="productAmount" @input="$emit('update:productAmount', $event.target.value)"></td>
      </tr>
    </table>
  `,
  props: ["id", "userId", "productId", "price", "productAmount"],
  emits: ["update:id", "update:userId", "update:productId", "update:price", "update:productAmount"],
  data() {
    return {
      userList: [], // Populate with user IDs
      productList: [] // Populate with product IDs
    };
  },
  // Other logic...
};