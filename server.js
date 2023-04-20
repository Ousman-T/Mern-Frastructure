require('dotenv').config();
require('./config/database');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
// development: 3001
// in production we'll use a PORT number set in the environment variable
const PORT = process.env.PORT || 3001;


//* Config
app.use(logger('dev'));
// JSON payload middleware (for data coming from front end functions)
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//* All other routes aside from catchAll 








// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


/**
 * Listening Port
 */
app.listen(PORT, () => {
    console.log(`Server is running on Port#:${PORT}`);
});