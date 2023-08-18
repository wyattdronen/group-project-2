const router = require('express').Router();
const { UserData } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newUserData = await UserData.create({
      height: req.body.height,         
      weight: req.body.weight,         
      weight_goal: req.body.weight_goal,
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(201).json(newUserData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userDataData = await UserData.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!userDataData) {
      res.status(404).json({ message: 'No user data found with this id!' });
      return;
    }

    res.status(200).json(userDataData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
