module.exports = (dbConnection, Sequelize) => {
    const User = dbConnection.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        
        phoneNumber: {
            type: Sequelize.INTEGER
            
        }
    })
    return User
}