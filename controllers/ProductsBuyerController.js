const { db } = require("../db")
const productBuyer = db.ProductBuyer
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: "One or all required parameters are missing" })
    }
    const createdProduct = await products.create(req.body, {
        fields: ["name", "email", "price"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/Product/${createdProduct.id}`)
        .json(createdProduct)
}
// READ
exports.getAll = async (req, res) => {
    const result = await productBuyer.findAll({
        include: [db.products, db.users]
    })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundProduct = await products.findByPk(req.params.id)
    if (foundProduct === null) {
        return res.status(404).send({ error: `Product not found` })
    }
    res.json(foundProduct)
}
// UPDATE
exports.editById = async (req, res) => {
    const updateResult = await products.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["name", "price"]
    })
    if (updateResult[0] == 0) {
        return res.status(404).send({ error: "Product not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/Products/${req.params.id}`)
        .send()
}
// DELETE
exports.deleteById = async (req, res) => {
    const deletedAmount = await products.destroy({
        where: { id: req.params.id }
    })
    if (deletedAmount === 0) {
        return res.status(404).send({ error: "Product not found" })
    }
    res.status(204).send()
}