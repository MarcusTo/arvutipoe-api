module.exports = (dbConnection, Sequelize) => {
    const User = dbConnection.define("User", {
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
        phoneNumber: {
            type: Sequelize.INTEGER
            
        },
        // UserId:{
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: Product,
        //         key: "id"
        //     }
        // }
    })
    return User
}