export default {
  /*html*/
  template: `
    <table id="invoicesTable" class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" >
          <td @click="getInvoice(user.id)">{{ invoice.user.name }}</td>
          <td>{{ invoice.user.email }}</td>
          <td>{{ invoice.user.phoneNumber }}</td>
          <td>{{ invoice.price }}</td>
        </tr>
      </tbody>
    </table>
  `,
  emits: ["showModal"],
  data() {
    return {
      invoices: [],
    };
  },
  async created() {
    this.invoices = await (await fetch("http://localhost:8080/invoices")).json();
  },
  methods: {
    getUser: async function (id) {
      const invoiceInModal = await (
        await fetch("http://localhost:8080/invoices/" + id)
      ).json();
      this.$emit("showModal", invoiceInModal);
    },
  },
};
