const { sequelize } = require('./connection');
const User = require('./user');
const Lesson = require('./lesson');
const UserLesson = require('./userLesson');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Lesson = Lesson;
db.UserLesson = UserLesson;


// model init
User.init(sequelize);
Lesson.init(sequelize);
UserLesson.init(sequelize);

module.exports = db;
