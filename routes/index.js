const router = require('express').Router();
const passport = require('passport');

// The root route renders homepage
router.get('/', function(req, res) {
  res.render('landing') 
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/products',
    failureRedirect : '/landing' 
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie keeping track of the user!
    res.redirect('/') // if log out, back to landing page
  })
})

module.exports = router;
