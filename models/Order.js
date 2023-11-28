module.exports = (dbConnection, Sequelize, users, products) => {
    const Order = dbConnection.define("Order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: Sequelize.DECIMAL
        },
        productId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: products,
                key: "id"
            }
        },
        userId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: users,
                key: "id"
            }
        }
    })
    return Order
}