const router = require('express').Router();
const { Exercise } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching exercises.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data. Exercise could not be created.' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);

    if (!deletedExercise) {
      return res.status(404).json({ error: 'Exercise not found.' });
    }

    res.json({ message: 'Exercise deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the exercise.' });
  }
});

module.exports = router;