const express = require('express');

const app = express();

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
    //res.locals.prompt = "Who1 us buries in Grant's tomb?";
    res.render('card', {prompt: "Who1 us buries in Grant's tomb?", hint: "Think about whose tomb it is."});
} );
app.get('/sandbox', (req, res) => {
    //res.locals.prompt = "Who1 us buries in Grant's tomb?";
    res.render('sandbox', {username, friends});
} );

app.listen(3000, () => {
    console.log('The application is runnung on a localgost:3000')
});

