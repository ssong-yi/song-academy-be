const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const bookingService = require('../service/bookingService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      lessonId: req.body.lessonId,
      userId: req.body.userId,
      bookingDate: req.body.bookingDate,
      memo: req.body.memo,
      userCount: req.body.userCount,
      status: 'submit', // 등록시 고정됨(status: submit)
    };
    logger.info(`(booking.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.bookingDate || !params.status) {
      const err = new Error('Not allowed null (bookingDate, status)');
      logger.error(err.toString());

      return res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await bookingService.reg(params);
    logger.info(`(booking.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      bookingDate: req.query.bookingDate,
      status: req.query.status,
    };
    logger.info(`(booking.list.params) ${JSON.stringify(params)}`);

    const result = await bookingService.list(params);
    logger.info(`(booking.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(booking.info.params) ${JSON.stringify(params)}`);

    const result = await bookingService.info(params);
    logger.info(`(booking.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 상태 변경
router.put('/status/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      status: req.body.status, // 상태값만 변경함
    };
    logger.info(`(booking.statusUpdate.params) ${JSON.stringify(params)}`);

    const result = await bookingService.editStatus(params);
    logger.info(`(booking.statusUpdate.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      lessonId: req.body.lessonId,
      userId: req.body.userId,
      bookingDate: req.body.bookingDate,
      userCount: req.body.userCount,
    };
    logger.info(`(booking.update.params) ${JSON.stringify(params)}`);

    const result = await bookingService.edit(params);
    logger.info(`(booking.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(booking.delete.params) ${JSON.stringify(params)}`);

    const result = await bookingService.delete(params);
    logger.info(`(booking.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
