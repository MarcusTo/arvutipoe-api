const ordersController = require("../controllers/OrdersController.js")
module.exports = (app) => {
    app.route("/orders")
        .get(ordersController.getAll)
        .post(ordersController.createNew)      // Create
    app.route("/orders/:id")
        .get(ordersController.getById)         // Read
        .put(ordersController.editById)        // Update
        .delete(ordersController.deleteById)   // Delete
}