const products = require("../products/data")
const { getBaseurl } = require("./helpers")

// CREATE
exports.createNew = (req, res) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({ error: "One or all required parameters are missing" })
    }
    const createdProduct = products.create({
        name: req.body.name,
        price: req.body.price
    })
    res.status(201)
        .location(`${getBaseurl(req)}/products/${createdProduct.id}`)
        .send(createdProduct)
}
// READ
exports.getAll = (req, res) => {
    res.send(products.getAll())
}
exports.getById = (req, res) => {
    const foundProduct = products.getById(req.params.id)
    if (foundProduct === undefined) {
        return res.status(404).send({ error: `Product not found` })
    }
    res.send(foundProduct)
}
// UPDATE
exports.editById = (req, res) => {

}
// DELETE
exports.deleteById = (req, res) => {
    if (products.delete(req.params.id) === undefined) {
        return res.status(404).send({ error: "Products not found" })
    }
    res.status(204).send()
}