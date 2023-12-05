const { db } = require("../db");
const invoices = db.invoices;
const { getBaseurl } = require("./helpers");

// CREATE
exports.createNew = async (req, res) => {
    if (!req.body.id) {
        return res.status(400).send({ error: "Required parameter 'id' is missing" });
    }
    const createdInvoice = await invoices.create({ ...req.body }, {
        fields: ["id", "orderId", "userId", "price" ]
    });
    res.status(201)
        .location(`${getBaseurl(req)}/invoices/${createdInvoice.id}`)
        .send(createdInvoice);
};

// READ
exports.getAll = async (req, res) => {
    const result = await invoices.findAll({ attributes: ["id", "orderId", "userId", "price" ], include: [User] });
    res.json(result);
};

exports.getById = async (req, res) => {
    const foundInvoice = await invoices.findByPk(req.params.id);
    if (foundInvoice === null) {
        return res.status(404).send({ error: `Invoice not found` });
    }
    res.json(foundInvoice);
};

// UPDATE
exports.editById = async (req, res) => {
    const updateResult = await invoices.update({ ...req.body }, {
        where: { id: req.params.id },
        fields: ["id", "orderId", "userId", "price" ] 
    });
    if (updateResult[0] == 0) {
        return res.status(404).send({ error: "Invoice not found" });
    }
    res.status(202)
        .location(`${getBaseurl(req)}/invoices/${req.params.id}`)
        .send();
};

// DELETE
exports.deleteById = async (req, res) => {
    const deletedAmount = await invoices.destroy({
        where: { id: req.params.id }
    });
    if (deletedAmount === 0) {
        return res.status(404).send({ error: "Invoice not found" });
    }
    res.status(204).send();
};
