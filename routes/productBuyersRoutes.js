const productBuyersController = require("../controllers/ProductsBuyersController.js")
module.exports = (app) => {
    app.route("/ProductBuyers")
        .get(productBuyersController.getAll)
        .post(productBuyersController.createNew)      // Create
    app.route("/ProductBuyers/:id")
        .get(productBuyersController.getById)         // Read
        .put(productBuyersController.editById)        // Update
        .delete(productBuyersController.deleteById)   // Delete
}