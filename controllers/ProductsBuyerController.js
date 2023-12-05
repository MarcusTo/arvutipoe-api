const { db } = require("../db")
const productBuyer = db.ProductBuyers
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.id || !req.body.price|| !req.body.productAmount) {
        return res.status(400).send({ error: "One or all required parameters are missing" })
    }
    const createdProductBuyer = await productBuyers.create(req.body, {
        fields: ["price", "productAmount"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/ProductBuyers/${createdProductBuyer.id}`)
        .json(createdProductBuyer)
}
// READ
exports.getAll = async (req, res) => {
    const result = await productBuyer.findAll({
        include: [db.products, db.users]
    })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundProductBuyer = await productBuyers.findByPk(req.params.id)
    if (foundProductBuyer === null) {
        return res.status(404).send({ error: `Product Buyer not found` })
    }
    res.json(foundProductBuyer)
}
// UPDATE
exports.editById = async (req, res) => {
    const updateResult = await productBuyers.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["price", "productAmount"]
    })
    if (updateResult[0] == 0) {
        return res.status(404).send({ error: "Product Buyer not found" })
    }
    res.status(204)
        .location(`${getBaseurl(req)}/ProductBuyers/${req.params.id}`)
        .send()
}
// DELETE
exports.deleteById = async (req, res) => {
    const deletedAmount = await productBuyers.destroy({
        where: { id: req.params.id }
    })
    if (deletedAmount === 0) {
        return res.status(404).send({ error: "Product Buyer not found" })
    }
    res.status(204).send()
}