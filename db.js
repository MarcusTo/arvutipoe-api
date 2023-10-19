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
db.ProductBuyers = require("./models/ProductBuyers.js")(sequelize, Sequelize)

db.users.hasMany(db.users,{through: db.ProductBuyers})
db.products.belongsToMany(db.products,{through: db.ProductBuyers})
db.products.hasMany(db.ProductBuyers)
db.users.hasMany(db.ProductBuyers)

sync = async () => {
    // await sequelize.sync({ force: true }) // Erase all and recreate
    await sequelize.sync({alter:true}) // Alter existing to match the model
}

module.exports = { db, sync }