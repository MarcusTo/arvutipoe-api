const usersController = require("../controllers/UsersController.js")
module.exports = (app) => {
    app.route("/users")
        .get(usersController.getAll)
        .post(usersController.createNew)      // Create
    app.route("/users/:id")
        .get(usersController.getById)         // Read
        .put(usersController.editById)        // Update
        .delete(usersController.deleteById)   // Delete
}