module.exports = (dbConnection, Sequelize, Product, User) => {
    const ProductBuyers = dbConnection.define("ProductBuyers", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId:{
            type:Sequelize.INTEGER,
            allowNull:false,
            references:{
                model:User,
                key:"id"
            }
        },
        productId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: "id"
            }
        },
        price: {
            type: Sequelize.DECIMAL,
        },
        
    });

    // ProductBuyers.belongsTo(Product);
    // ProductBuyers.belongsTo(User);

    return ProductBuyers;
};