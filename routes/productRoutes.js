const productsController = require("../controllers/ProductsController.js")
module.exports = (app) => {
    app.route("/products")
        .get(productsController.getAll)
        .post(productsController.createNew)      // Create
    app.route("/products/:id")
        .get(productsController.getById)         // Read
        .put(productsController.editById)        // Update
        .delete(productsController.deleteById)   // Delete
}