const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "mariadb",
    define: {
        timestamps: true
    },
    logging: console.log
})
try {
    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
const db = {}
db.Sequelize = Sequelize
db.connection = sequelize
db.users = require("./models/User")(sequelize, Sequelize)
db.products = require("./models/Product")(sequelize, Sequelize)
db.ProductBuyers = require("./models/ProductBuyers")(sequelize, Sequelize, db.products, db.users)
db.Invoice = require("./models/Invoice")(sequelize, Sequelize, db.users)

db.products.belongsToMany(db.users, { through: db.ProductBuyers })
db.users.belongsToMany(db.products, { through: db.ProductBuyers })
db.products.hasMany(db.ProductBuyers)
db.users.hasMany(db.ProductBuyers)
db.ProductBuyers.belongsTo(db.products)
db.ProductBuyers.belongsTo(db.users)

sync = async () => {
    if (process.env.DROP_DB === "true") {
        console.log("Begin DROP")
        await db.connection.query('SET FOREIGN_KEY_CHECKS = 0')
        console.log("Checks disabled")
        await db.connection.sync({ force: true })
        console.log('Database synchronised.')
        await db.connection.query('SET FOREIGN_KEY_CHECKS = 1')
        console.log("Checks enabled")

        const [product, createdG] = await db.products.findOrCreate({
            where: {
                name: "1Of1"
            },
            defaults: {
                name: "1Of1",
                price: 3000,
            }
        })
        console.log("product created: ", createdG)
        const [user, createdP] = await db.users.findOrCreate({
            where: {
                name: "MarcusTo"
            },
            defaults: {
                name: "MarcusTo"
            }
        })
        console.log("Order created: ", createdP)
        const [order, createdGP] = await db.order.findOrCreate({
            where: {
                id: 1
            },
            defaults: {
                UserId: user.id,
                ProductId: product.id,
                price: 3000
            }
        })
        console.log("Order created: ", createdGP)
    }
    else {
        console.log("Begin ALTER")
        await db.connection.sync({ alter: true }) // Alter existing to match the model
        console.log('Database synchronised.')
    }
}

module.exports = { db, sync }