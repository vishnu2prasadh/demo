var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hi');
});

app.listen(4000, function(req, res) {

    console.log('::::listen::');
})