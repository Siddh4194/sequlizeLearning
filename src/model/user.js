const { Model } = require("sequelize");

class Users extends Model{
    static init(sequelize){
            return super.init({
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: true
                }
            }
            ,
            {
                sequelize,
                tableName: 'users'
            }
        )
    }
}

module.exports = Users;