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

db.orders = require("./models/Order")(sequelize, Sequelize, db.products, db.users)
db.products.belongsToMany(db.users, {through: db.orders})
db.users.belongsToMany(db.products, {through: db.orders})
db.users.hasMany(db.orders)
db.orders.belongsTo(db.users)
db.products.hasMany(db.orders)
db.orders.belongsTo(db.products)



sync = async () => {
    try {
        if (process.env.DROP_DB === "true") {
            console.log("Begin DROP");
            await db.connection.query('SET FOREIGN_KEY_CHECKS = 0');
            console.log("Checks disabled");

            await db.connection.sync({ force: true });
            console.log('Database synchronized.');

            const [product, createdP] = await db.products.findOrCreate({
                where: {
                    name: "1Of1"
                },
                defaults: {
                    name: "1Of1",
                    price: 3000,
                    productAmount: 1
                }
            });
            console.log("Product created:", createdP, product.id);

            const [user, createdU] = await db.users.findOrCreate({
                where: {
                    name: "MarcusTo"
                },
                defaults: {
                    name: "MarcusTo"
                }
            });
            console.log("User created:", createdU, user.id);

            const [order, createdPU] = await db.orders.findOrCreate({
                where: {
                    UserId: 1
                },
                defaults: {
                    UserId: user.id,
                    ProductId: product.id,
                    productAmount:1,
                    price: 1600
                }
            })
            console.log("Order created:", createdPU, order.id);


            await db.connection.query('SET FOREIGN_KEY_CHECKS = 1');
            console.log("Checks enabled");
        } else {
            console.log("Begin ALTER");
            await db.connection.sync({ alter: true }); // Alter existing to match the model
            console.log('Database synchronized.');
        }
    } catch (error) {
        console.error('Error during synchronization:', error);
    }
};

module.exports = { db, sync };