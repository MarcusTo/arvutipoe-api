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
        phone: {
            type: Sequelize.INTEGER,
            allowNull: false
            
        }
    })
    return ProductBuyers
}