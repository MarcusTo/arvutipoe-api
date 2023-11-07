const { db } = require("../db")
const order = db.orders
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).send({ error: "Required parameter 'id' is missing" })
    }
    const createdOrder = await orders.create({ ...req.body }, {
        fields: ["id", "invoiceId", "price", "productAmount","productId"]
    })
    res.status(201)
        .location(`${getBaseurl(req)}/orders/${createdOrder.id}`)
        .send(createdOrder)
}
// READ
exports.getAll = async (req, res) => {
    const result = await orders.findAll({ attributes: ["id", "orderId", "price", "userId"] })
    res.json(result)
}
exports.getById = async (req, res) => {
    const foundOrder = await orders.findByPk(req.params.id)
    if (foundOrder === null) {
        return res.status(404).send({ error: `Order not found` })
    }
    res.json(foundOrder)
}
// UPDATE
exports.editById = async (req, res) => {
    const updateResult = await orders.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["id", "orderId", "price","userId"]
    })
    if (updateResult[0] == 0) {
        return res.status(404).send({ error: "Order not found" })
    }
    res.status(202)
        .location(`${getBaseurl(req)}/orders/${req.params.id}`)
        .send()
}
// DELETE
exports.deleteById = async (req, res) => {
    const deletedAmount = await orders.destroy({
        where: { id: req.params.id }
    })
    if (deletedAmount === 0) {
        return res.status(404).send({ error: "Order not found" })
    }
    res.status(204).send()
}