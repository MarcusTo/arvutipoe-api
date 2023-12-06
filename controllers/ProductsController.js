const { db } = require("../db")
const products = db.products
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.productAmount) {
        return res.status(400).send({ error: "One or all required parameters are missing" })
    }
    const createdProduct = await products.create(req.body, {
        fields: ["name", "price","productAmount"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/products/${createdProduct.id}`)
        .json(createdProduct)
}
// READ
exports.getAll = async (req, res) => {
    const result = await products.findAll({ attributes: ["id", "name","price","productAmount"] })
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
        fields: ["name", "price", "productAmount"]
    })
    if (updateResult[0] == 0) {
        return res.status(404).send({ error: "Product not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/products/${req.params.id}`)
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