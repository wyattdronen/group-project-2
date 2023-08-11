const User = require('./user');
const UserData = require('./user_data');
const Exercise = require('./exercise');
const Routine = require('./routine')

User.hasOne(UserData, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

UserData.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Routine, {
  foreignKey: 'user_id',
  onDelete:'CASCADE'
});

Routine.belongsTo(User, {
  foreignKey: 'user_id'
});

Routine.hasMany(Exercise, {
  foreignKey:'routine_id',
  onDelete: 'CASCADE',
});

Exercise.belongsTo(Routine, {
  foreignKey: 'routine_id',
});

module.exports = { User, UserData, Exercise, Routine};