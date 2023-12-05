module.exports = (dbConnection, Sequelize, Product) => {
    const Order = dbConnection.define("Order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // userId:{
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: User,
        //         key: "id"
        //     }
        // },
        productId:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: "id"
            }
        },
        productAmount: {
            type: Sequelize.DECIMAL
        }, 
        price: {
            type: Sequelize.DECIMAL
        }, 
    })
    return Order
}