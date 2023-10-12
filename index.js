const app = require("express")()
require("dotenv").config()
const port = process.env.DB_PORT
const swaggerui = require("swagger-ui-express")
const swaggerDocument = require("./docs/swagger.yaml")
const products = require("./products/data")
const users = require("./users/data")
const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, 
    process.env.DB_PASS, process.env.DB_HOST,'marcustoman21.thkit.ee ', 'd123442sa470150', 'p92PMBP4TtLtw972bc', {
    host: 'localhost',
    dialect: "mariadb"
  });

  try {
    await sequelize.authenticate().then (() => {
        console.log('Connection has been established successfully.');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

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