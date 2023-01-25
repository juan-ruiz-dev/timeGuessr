const express = require('express');
const app = express();
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('index')
})





app.listen(3000, function(req, res){
    console.log('up on 3k')
})