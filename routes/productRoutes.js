const ProductsController = require("../controllers/ProductsController.js")
module.exports = (app) => {
    app.route("/Products")
        .get(ProductsController.getAll)
        .post(ProductsController.createNew)      // Create
    app.route("/Products/:id")
        // .get(ProductsController.getById)      // Read
        .put(ProductsController.editById)        // Update
        .delete(ProductsController.deleteById)   // Delete
}