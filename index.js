const app = require("express")()
const port = 8080
const swaggerui = require("swagger-ui-express")
const yamljs = require("yamljs")
const swaggerDocument = yamljs.load("./docs/swagger.yaml")
const games = require("./products/data")
const players = require("./users/data")

app.use("/docs", swaggerui.serve, swaggerui.setup(swaggerDocument))

app.get("/products", (req, res) => {
    res.send(products.getAll())
})

app.get("/products/:id", (req, res) => {
    const foundProduct = games.getById(req.params.id)
    if (foundProduct === undefined) {
        return res.status(404).send({ error: `Product not found` })
    }
    res.send(foundProduct)
})
app.get("/users", (req, res) => {
    res.send(users.getAll())
})

app.get("/users/:id", (req, res) => {
    const foundProduct = users.getById(req.params.id)
    if (foundProduct === undefined) {
        return res.status(404).send({ error: `User not found` })
    }
    res.send(foundProduct)
})


app.listen(port, ()=> {
    console.log(`API up at: http://localhost:${port}`)
})