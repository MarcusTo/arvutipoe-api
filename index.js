const app = require("express")()
const port = 8080
const swaggerui = require("swagger-ui-express")
const swaggerDocument = require("./docs/swagger.json")

app.use("/docs",swaggerui.serve,swaggerui.setup(swaggerDocument))
app.get("/computers", (req,res)=>{
    res.send([
        {id:1,name:"Gaming PC MEGA"},
        {id:2,name:"Gaming PC Super"}
    ])
})
app.listen(port, ()=> {
    console.log(`API up at: http://localhost:${port}`)
})