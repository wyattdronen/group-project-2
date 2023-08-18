const withAuth = require('../utils/auth');    
const router = require('express').Router();
const { User, UserData, Exercise, Routine } = require('../models');

router.get('/', async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await User.findByPk(userId, {
      include: [
        { model: UserData },
        { model: Routine, include: [{ model: Exercise }] }
      ],
    });

    res.render('home', { user, logged_in: !!userId }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

router.get('/bmi', withAuth, (req, res) => {
  res.render('bmi');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await User.findByPk(userId, {
      include: [{ model: UserData }],
    });

    if (!user) {
      console.log('User not found'); // Add this line for debugging
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User data:', user);

    res.render('profile', {
      name: user.name,
      User_data: user.UserData,
      logged_in: true,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json(err);
  }
});


router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/routine', withAuth, async (req, res) => {
  try {
    const userId = req.session.userId;
    const user = await User.findByPk(userId, {
      include: [{ model: Routine }],
    });

    res.render('routine', { user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router;
