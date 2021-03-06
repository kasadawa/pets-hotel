const express = require('express');
const path = require('path');
const app = express()
const routes = require('./routes');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname,'public')))
app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))