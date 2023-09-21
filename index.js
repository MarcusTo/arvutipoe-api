const app = require("express")()
const port = 8080
const swaggerui = require("swagger-ui-express")
const swaggerDocument = require("./docs/swagger.json")

app.use("/docs",swaggerui.serve,swaggerui.setup(swaggerDocument))

app.get("/computers", (req,res)=>{
    res.send([
        {id:1,name:"Gaming PC Ultra"},
        {id:2,name:"Gaming PC Mega"},
        {id:3,name:"Gaming PC Casual"},
        {id:4,name:"Gaming PC Starter"},
        {id:5,name:"Gaming PC Budget"},
    ])
})
app.listen(port, ()=> {
    console.log(`API up at: http://localhost:${port}`)
})