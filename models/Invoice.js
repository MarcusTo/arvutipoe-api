module.exports = (dbConnection, Sequelize, Order, User) => {
    const Invoice = dbConnection.define("Invoice", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Order,  
                key: "id"     
            }
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,   
                key: "id"      
            }
        },
        price: {
            type: Sequelize.DECIMAL,
        }
    })

    return Invoice;
}