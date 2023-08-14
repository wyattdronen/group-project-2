const { Routine } = require('../models');

const routineData = [
  {
    name: 'Arms Routine',
    duration: 30,
    user_id: 1,
  },
  {
    name: 'Legs Routine',
    duration: 45,
    user_id: 2,
  },
  {
    name: 'Chest and Back Routine',
    duration: 60,
    user_id: 1,
  },
  {
    name: 'Core Workout',
    duration: 20,
    user_id: 3,
  },
  {
    name: 'Full Body Circuit',
    duration: 60,
    user_id: 2,
  },
  {
    name: 'Cardio Blast',
    duration: 40,
    user_id: 1,
  },
  {
    name: 'Upper Body Strength',
    duration: 50,
    user_id: 3,
  },
  {
    name: 'Lower Body Burn',
    duration: 45,
    user_id: 2,
  },
  {
    name: 'HIIT Intensity',
    duration: 30,
    user_id: 3,
  },
  {
    name: 'Stretch and Relaxation',
    duration: 15,
    user_id: 1,
  },
];

const seedRoutine = () => Routine.bulkCreate(routineData);

module.exports = seedRoutine;
