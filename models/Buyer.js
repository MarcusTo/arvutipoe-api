module.exports = (dbConnection, Sequelize) => {
    const Buyer = dbConnection.define("Buyer",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allownull: false
        },
        email: {
            type: Sequelize.STRING,
            allownull: false
        },
        phoneNumber:{
            type: Sequelize.STRING,
            allownull: false
        } 
    })
    return Buyer
};