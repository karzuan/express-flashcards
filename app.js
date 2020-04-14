// start the app: nodemon
const express = require('express');
const bodyParses = require('body-parser');


const app = express();
app.use(bodyParses.urlencoded({ extended: false}));

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

app.get('/', (req, res) => {
    res.render('index');
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
    res.render('hello');
} );
app.post('/hello', (req, res) => {
    //console.dir(req.body);
    //res.json(req.body);
    res.render('hello', {name: req.body.username });
} );

app.listen(3000, () => {
    console.log('The application is runnung on a localgost:3000')
});

