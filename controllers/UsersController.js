const { db } = require("../db")
const products = db.users
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({ error: "Required parameter 'name' is missing" })
    }
    const createdUser = await users.create({ ...req.body }, {
        fields: ["name", "email", "phone"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/users/${createdUser.id}`)
        .send(createdUser)
}
// READ
exports.getAll = async (req, res) => {
    const result = await users.findAll({ attributes: ["id", "name", "email", "phone"] })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundUser = await users.findByPk(req.params.id)
    if (foundUser === null) {
        return res.status(404).send({ error: `User not found` })
    }
    res.json(foundUser)
}
// UPDATE
exports.editById = async (req, res) => {
    const updateResult = await users.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["name", "email", "phone"]
    })
    if (updateResult[0] == 0) {
        return res.status(404).send({ error: "User not found" })
    }
    res.status(202)
        .location(`${getBaseurl(req)}/users/${req.params.id}`)
        .send()
}
// DELETE
exports.deleteById = async (req, res) => {
    const deletedAmount = await users.destroy({
        where: { id: req.params.id }
    })
    if (deletedAmount === 0) {
        return res.status(404).send({ error: "User not found" })
    }
    res.status(204).send()
}