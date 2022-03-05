const logger = require('../lib/logger');
const bookingDao = require('../dao/bookingDao');
const userLessonDao = require('../dao/userLessonDao');

const service = {
  // booking 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await bookingDao.insert(params);
      logger.debug(`(bookingService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(bookingService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await bookingDao.selectList(params);
      logger.debug(`(bookingService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(bookingService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await bookingDao.selectInfo(params);
      logger.debug(`(bookingService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(bookingService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // status update
  async editStatus(params) {
    let result = null;

    // 0. 예약 상세 정보를 읽어 온다.
    let bookingInfo = null;
    try {
      bookingInfo = await bookingDao.selectInfo(params);
      logger.debug(`(bookingService.editStatus.bookingInfo) ${JSON.stringify(bookingInfo)}`);
    } catch (err) {
      logger.error(`(bookingService.editStatus.bookingInfo) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // status값에 따라 처리를 해준다.
    if (params.status === 'confirm') {
      // 1. confirm인 경우 처리
      try {
        logger.debug(`(userLessonTest)${bookingInfo.userId}/${bookingInfo.lessonId}`);
        const insertedUserLesson = await userLessonDao.insert({
          userId: bookingInfo.userId, lessonId: bookingInfo.lessonId,
        });
        logger.debug(`(bookingService.userLessonDao.insert) ${JSON.stringify(insertedUserLesson)}`);
      } catch (err) {
        logger.error(`(bookingService.userLessonDao.insert) ${err.toString()}`);
        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } else {
      // 2. cancel인 경우 처리(혹은 submit으로 되돌릴 경우 처리)
      try {
        const deletedUserLesson = await userLessonDao.delete({
          userId: bookingInfo.userId, lessonId: bookingInfo.lessonId,
        });
        logger.debug(`bookingService.userLessonDao.delete ${JSON.stringify(deletedUserLesson)}`);
      } catch (err) {
        logger.error(`(bookingService.userLessonDao.delete) ${err.toString()}`);
        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    }

    // 3. status 업데이트(status 상태와 관계없이 무조건 업데이트 처리)
    try {
      result = await bookingDao.statusUpdate(params);
      logger.debug(`(bookingService.editStatus) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(bookingService.editStatus) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await bookingDao.update(params);
      logger.debug(`(bookingService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(bookingService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await bookingDao.delete(params);
      logger.debug(`(bookingService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(bookingService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
