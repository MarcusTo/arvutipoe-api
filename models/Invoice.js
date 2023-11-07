const Invoice = require("./Invoice")
module.exports = (dbConnection, Sequelize, orders, users) => {
    const Invoice = dbConnection.define("Invoice", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: Sequelize.DECIMAL,
        },
        UserId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: users,
                key: "id"
            }
        },
        OrderId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: orders,
                key: "id"
            }
        }
    })
    return Invoice
}