const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Asset
app.use(express.static('public'));


// Set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');


//Routes web.js
require('./routes/web')(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})