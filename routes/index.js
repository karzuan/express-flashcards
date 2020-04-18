const express = require('express');
const router = express.Router();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ]; 
  const friends = [
    ['Illya', 'Shingarev'],
    ['Maksim', 'Fokeev'],
    ['Many', 'Davao'],
    ['Don', 'BlackNiger'],
    ['Pepper', 'Who']
  ]; 
  const username ="Kosta";
  

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name){
    res.render('index', {name: name });
    } else {
        res.redirect('hello');
    }
} );

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
} );

router.get('/cards', (req, res) => {
    //res.locals.prompt = "Who is buried in Grant's tomb?";
    res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is."});
} );
router.get('/sandbox', (req, res) => {
    //res.locals.prompt = "Who1 us buries in Grant's tomb?";
    res.render('sandbox', {username, friends});
} );
router.get('/hello', (req, res) => {
    if ( req.cookies.username ) {
        res.redirect('/');
    } else {
    res.render('hello');
    }
} );
router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username );
    //console.dir(req.body);
    //res.json(req.body);
    //res.render('hello', {name: req.body.username });
    res.redirect('/');
} );

module.exports = router;