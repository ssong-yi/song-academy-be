const Sequelize = require('sequelize');
const User = require('./user');
const Lesson = require('./lesson');

module.exports = class UserLesson extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
        },
      },
      lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Lesson,
          key: 'id',
        },
      },
    }, {
      sequelize,
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }
};
