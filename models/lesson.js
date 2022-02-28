const Sequelize = require('sequelize');

module.exports = class Lesson extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.TEXT,
      },
      maxUserCount: {
        type: Sequelize.INTEGER,
      },
      time: {
        type: Sequelize.INTEGER,
      },
    }, {
      sequelize,
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: { name: 'userId', onDelete: 'SET NULL', as: 'User' } });
  }
};
