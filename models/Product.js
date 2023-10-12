module.exports = (dbConnection, Sequelize) => {
    const Product = dbConnection.define("Product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL
        }
    })
    return Product
}