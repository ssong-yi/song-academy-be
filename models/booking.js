const Sequelize = require('sequelize');

module.exports = class Booking extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      lessonId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      bookingDate: {
        type: Sequelize.DATE, // 예약 날짜
      },
      userCount: {
        type: Sequelize.INTEGER, // 예약 인원
      },
      status: {
        type: Sequelize.STRING(20), // 예약 상태(registered: 신청/ confirmed: 확정/ canceled: 취소)
      },
    }, {
      sequelize,
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }
};