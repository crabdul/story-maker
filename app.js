
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');

const routes = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.use('/', routes);


app.listen(3000, () => {
    console.log('Server started on Port 3000');
})