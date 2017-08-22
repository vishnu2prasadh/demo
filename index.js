
const express=require('express');
var app=express();


app.get('/',function(req, res){

    res.send('Hi ')
});
app.listen(7000,function(){

    console.log('Listening at 7000');
});

