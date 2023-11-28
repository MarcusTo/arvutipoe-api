const invoicesController = require("../controllers/InvoicesController.js")
module.exports = (app) => {
    app.route("/invoices")
        .get(invoicesController.getAll)
        .post(invoicesController.createNew)      // Create
    app.route("/invoices/:id")
        .get(invoicesController.getById)         // Read
        .put(invoicesController.editById)        // Update
        .delete(invoicesController.deleteById)   // Delete
}