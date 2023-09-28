const app = require("express")()
const port = 8080
const swaggerui = require("swagger-ui-express")
const swaggerDocument = require("./docs/swagger.yaml")
const products = require("./products/data")
const users = require("./users/data")

app.use("/docs",swaggerui.serve,swaggerui.setup(swaggerDocument))

app.get("/products", (req,res)=>{
    res.send(products.getAll())
})
app.get("/products/:id", (req,res)=>{
    const foundThing = products.getById(req.params.id)
    if (foundThing === undefined) {
       return res.status(404).send({ error: "Widget not found" }) 
    }
    res.send(foundThing)
})

app.get("/products", (req,res)=>{
    res.send(products.getAll())
})


app.listen(port, ()=> {
    console.log(`API up at: http://localhost:${port}`)
})