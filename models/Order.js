module.exports = (dbConnection, Sequelize, users, invoices,) => {
    const Order = dbConnection.define("Order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.INTEGER
            
        },
        invoiceId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: invoices,
                key: "id"
            }
        },
        productId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: products,
                key: "id"
            }
        },
        UserId:{
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