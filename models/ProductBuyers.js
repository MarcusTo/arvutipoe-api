module.exports = (dbConnection, Sequelize) => {
    const ProductBuyers = dbConnection.define("ProductBuyers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DECIMAL,
        }
        // BuyerId:{
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: Product,
        //         key: "id"
        //     }
        // }
    })
    return ProductBuyers
}