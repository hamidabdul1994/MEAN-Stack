var path = require('path'),
    bodyParser = require('body-parser'),
    express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
app.use(express.static('./frontEnd'));
app.use(require('./controller/index.js'));

/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
