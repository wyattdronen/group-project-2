const router = require('express').Router();
const { Routine } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const routines = await Routine.find();
    res.json(routines);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching routines.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newRoutine = await Routine.create(req.body);
    res.status(201).json(newRoutine);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data. Routine could not be created.' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRoutine = await Routine.findByIdAndDelete(id);

    if (!deletedRoutine) {
      return res.status(404).json({ error: 'Routine not found.' });
    }

    res.json({ message: 'Routine deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the routine.' });
  }
});

module.exports = router;
