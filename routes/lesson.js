const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const lessonService = require('../service/lessonService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      maxUserCount: req.body.maxUserCount,
      time: req.body.time,
      images: req.body.images,
    };
    logger.info(`(lesson.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.name) {
      const err = new Error('Not allowed null (name)');
      logger.error(err.toString());

      return res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await lessonService.reg(params);
    logger.info(`(lesson.reg.result) ${JSON.stringify(result)}`);

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
      name: req.query.name,
    };
    logger.info(`(lesson.list.params) ${JSON.stringify(params)}`);

    const result = await lessonService.list(params);
    logger.info(`(lesson.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(lesson.info.params) ${JSON.stringify(params)}`);

    const result = await lessonService.info(params);
    logger.info(`(lesson.info.result) ${JSON.stringify(result)}`);

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
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      maxUserCount: req.body.maxUserCount,
      time: req.body.time,
      images: req.body.images,
    };
    logger.info(`(lesson.update.params) ${JSON.stringify(params)}`);

    const result = await lessonService.edit(params);
    logger.info(`(lesson.update.result) ${JSON.stringify(result)}`);

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
    logger.info(`(lesson.delete.params) ${JSON.stringify(params)}`);

    const result = await lessonService.delete(params);
    logger.info(`(lesson.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
