const { sequelize } = require('./connection');
const User = require('./user');
const Lesson = require('./lesson');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Lesson = Lesson;

// model init
User.init(sequelize);
Lesson.init(sequelize);

module.exports = db;
