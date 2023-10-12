const users = require("../users/data")
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({ error: "Required parameter 'name' is missing" })
    }
    const createdUser = users.create({
        name: req.body.name
    })
    res.status(201)
        .location(`${getBaseurl(req)}/players/${createdUser.id}`)
        .send(createdUser)
}
// READ
exports.getAll = (req, res) => {
    res.send(users.getAll())
}
exports.getById = (req, res) => {
    const foundUser = users.getById(req.params.id)
    if (foundUser === undefined) {
        return res.status(404).send({ error: `User not found` })
    }
    res.send(foundUser)
}
// UPDATE
exports.editById = (req, res) => {

}
// DELETE
exports.deleteById = (req, res) => {
    if (users.delete(req.params.id) === undefined) {
        return res.status(404).send({ error: "Product not found" })
    }
    res.status(204).send()
}