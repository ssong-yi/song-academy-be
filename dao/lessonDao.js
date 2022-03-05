const { Op } = require('sequelize');
const { Lesson, Booking, User } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Lesson.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.title) {
      setQuery.where = {
        ...setQuery.where,
        title: { [Op.like]: `%${params.title}%` }, // like검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      Lesson.findAndCountAll({
        ...setQuery,
        include: [
          {
            model: User,
            as: 'ConfirmUsers',
            attributes: ['id', 'userid', 'name'],
            through: {
              attributes: [],
            },
          },
          {
            model: Booking,
            as: 'Bookings',
            attributes: ['id', 'lessonId', 'userId', 'bookingDate', 'userCount', 'status', 'createdAt'],
            include: [
              {
                model: User,
                as: 'User',
                attributes: ['id', 'userid', 'name'],
              },
            ],
          },
        ],
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      Lesson.findByPk(
        params.id,
        {
          include: [
            {
              model: User,
              as: 'ConfirmUsers',
              attributes: ['id', 'userid', 'name'],
              through: {
                attributes: [],
              },
            },
            {
              model: Booking,
              as: 'Bookings',
              attributes: ['id', 'lessonId', 'userId', 'bookingDate', 'userCount', 'status', 'createdAt'],
              include: [
                {
                  model: User,
                  as: 'User',
                  attributes: ['id', 'userid', 'name'],
                },
              ],
            },
          ],
        },
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      Lesson.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      Lesson.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
