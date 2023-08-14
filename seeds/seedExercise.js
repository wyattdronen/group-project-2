const { Exercise } = require('../models');

const exerciseData = [
  {
    name: 'push up',
    type_of_exercise: 'arms',
    max_weight: 'body weight', 
    routine_id: 1
  },
  {
    name: 'squat',
    type_of_exercise: 'legs',
    max_weight: 'barbell', 
    routine_id: 1
  },
  {
    name: 'bench press',
    type_of_exercise: 'chest',
    max_weight: 'dumbbells', 
    routine_id: 2
  },
  {
    name: 'pull-up',
    type_of_exercise: 'back',
    max_weight: 'body weight', 
    routine_id: 2
  },
  {
    name: 'plank',
    type_of_exercise: 'core',
    max_weight: 'body weight', 
    routine_id: 3
  },
  {
    name: 'deadlift',
    type_of_exercise: 'full body',
    max_weight: 'barbell', 
    routine_id: 3
  },
  {
    name: 'shoulder press',
    type_of_exercise: 'shoulders',
    max_weight: 'barbell', 
    routine_id: 4
  },
  {
    name: 'lunges',
    type_of_exercise: 'legs',
    max_weight: 'dumbbells', 
    routine_id: 4
  },
  {
    name: 'bicep curls',
    type_of_exercise: 'arms',
    max_weight: 'dumbbells', 
    routine_id: 5
  },
  {
    name: 'crunches',
    type_of_exercise: 'core',
    max_weight: 'body weight', 
    routine_id: 5
  },
];

const seedExercise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExercise;
