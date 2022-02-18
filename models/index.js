const { sequelize } = require('./connection');
const User = require('./user');
const Lesson = require('./lesson');
const UserLesson = require('./userLesson');
const Booking = require('./booking');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Lesson = Lesson;
db.UserLesson = UserLesson;
db.Booking = Booking;


// model init
User.init(sequelize);
Lesson.init(sequelize);
UserLesson.init(sequelize);
Booking.init(sequelize);

module.exports = db;
