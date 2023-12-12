module.exports = (dbConnection, Sequelize, Product, User) => {
    const Order = dbConnection.define("Order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserId:{
            type:Sequelize.INTEGER,
            allowNull:false,
            references:{
                model:User,
                key:"id"
            }
        },
        ProductId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: "id"
            }
        },
        price: {
            type: Sequelize.DECIMAL
        },
        productAmount:{
            type: Sequelize.INTEGER,
            allowNull:false
        }
    })
    return Order
}