import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class UserHistory extends Model {
    static associate(models) {
      const { User } = models

      UserHistory.belongsTo(User, { foreignKey: 'userId' })
    }
  }

  UserHistory.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    playerChoice: DataTypes.STRING,
    opponentChoice: DataTypes.STRING,
    result: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserHistory',
    timestamps: false,
  })

  return UserHistory
}