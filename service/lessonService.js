const logger = require('../lib/logger');
const lessonDao = require('../dao/lessonDao');

const service = {
  // lesson 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await lessonDao.insert(params);
      logger.debug(`(lessonService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(lessonService.reg) ${err.toString()}`);
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
      result = await lessonDao.selectList(params);
      logger.debug(`(lessonService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(lessonService.list) ${err.toString()}`);
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
      result = await lessonDao.selectInfo(params);
      logger.debug(`(lessonService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(lessonService.info) ${err.toString()}`);
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
      result = await lessonDao.update(params);
      logger.debug(`(lessonService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(lessonService.edit) ${err.toString()}`);
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
      result = await lessonDao.delete(params);
      logger.debug(`(lessonService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(lessonService.delete) ${err.toString()}`);
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
