const logger = require('../lib/logger');
const bookingDao = require('../dao/bookingDao');

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
