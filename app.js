// to start the app: node app.js || nodemon
const express = require('express');
const bodyParses = require('body-parser');
const cookieParser = require('cookie-parser');
const mainRoutes = require('./routes/index.js');
const cardRoutes = require('./routes/cards.js');


const app = express();
app.use(bodyParses.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');
app.use(mainRoutes);
app.use('/cards', cardRoutes);

//app.set('views', __dirname + '/templates') example of changing default views directory

// app.use((req, res, next ) => {
//     console.log('Hello');
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });

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

