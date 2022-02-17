const express = require('express');
const userRouter = require('./user');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// user
router.use('/users', userRouter);

module.exports = router;
