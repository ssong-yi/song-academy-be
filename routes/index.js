const express = require('express');
const logger = require('../lib/logger');
const userRouter = require('./user');
const lessonRouter = require('./lesson');
const bookingRouter = require('./booking');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// user
router.use('/users', userRouter);

// lesson
router.use('/lessons', lessonRouter);

// booking
router.use('/bookings', bookingRouter);

module.exports = router;
