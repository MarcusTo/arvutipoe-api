require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT
const swaggerui = require("swagger-ui-express")
const yamljs = require("yamljs")
const swaggerDocument = yamljs.load("./docs/swagger.yaml")


app.use(express.json())
app.use("/docs", swaggerui.serve, swaggerui.setup(swaggerDocument))

require("./routes/productRoutes")(app)
require("./routes/userRoutes")(app)

app.listen(port, () => {
    require("./db").sync()
        .then(console.log("Synchronized"))
        .catch((error) => console.log("Error:", error))
    console.log(`API up at: http://localhost:${port}`);
})