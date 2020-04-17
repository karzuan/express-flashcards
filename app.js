// to start the app: node app.js || nodemon
const express = require('express');
const bodyParses = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
app.use(bodyParses.urlencoded({ extended: false}));
app.use(cookieParser());

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

app.set('view engine', 'pug');
//app.set('views', __dirname + '/templates') example of changing default views directory

// app.use((req, res, next ) => {
//     console.log('Hello');
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name){
    res.render('index', {name: name });
    } else {
        res.redirect('hello');
    }
} );

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
} );

app.get('/cards', (req, res) => {
    //res.locals.prompt = "Who is buried in Grant's tomb?";
    res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is."});
} );
app.get('/sandbox', (req, res) => {
    //res.locals.prompt = "Who1 us buries in Grant's tomb?";
    res.render('sandbox', {username, friends});
} );
app.get('/hello', (req, res) => {
    if ( req.cookies.username ) {
        res.redirect('/');
    } else {
    res.render('hello');
    }
} );
app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username );
    //console.dir(req.body);
    //res.json(req.body);
    //res.render('hello', {name: req.body.username });
    res.redirect('/');
} );

app.use((req, res, next )=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    res.locals.error = err;
    res.status(err.status);
    res.render('error', err);
});

app.listen(3000, () => {
    console.log('The application is runnung on a localgost:3000')
});

