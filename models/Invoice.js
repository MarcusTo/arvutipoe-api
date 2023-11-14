
module.exports = (dbConnection, Sequelize, User) => {
    const Invoice = dbConnection.define("Invoice", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
        },
        UserId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id"
            }
        }
    })
    return Invoice
}