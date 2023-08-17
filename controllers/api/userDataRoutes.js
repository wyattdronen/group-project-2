const router = require('express').Router();
const { UserData } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const userData = await UserData.find();
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching user data.' });
  }
});

router.get('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const userData = await UserData.find({ user_id }); 
    
    if (!userData || userData.length === 0) {
      return res.status(404).json({ error: 'User data not found.' });
    }
    
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching user data.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await UserData.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data. User data could not be created.' });
  }
});

router.put('/:user_id', async (req, res) => {
  const { user_id } = req.params;

  try {
    const updatedUser = await UserData.findOneAndUpdate({ user_id }, req.body, { new: true });
    
    if (!updatedUser) {
      return res.status(404).json({ error: 'User data not found.' });
    }
    
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data. User data could not be updated.' });
  }
});

module.exports = router;
