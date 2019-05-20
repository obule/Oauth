const router = require('express').Router();
const passport = require('passport');


// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout

router.get('/logout', (req, res) => {
    // Handle with passport
    req.logout();
    res.redirect('/');
})

// aauth wit google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

// callback route for google
router.get('/google/redirect', passport.authenticate('google'),(req, res) =>{
    //res.send(req.user)
    res.redirect('/profile');
})

module.exports = router;
