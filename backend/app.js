const express = require('express')
var app = new express();
var bodyParser = require('body-parser')
var cors = require('cors')
var request = require('request')
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/search',function(req,response){
    search = req.query.search
    request.get("http://www.omdbapi.com/?t="+search+"&apikey=82ac9333", function(err, res, data) {
        console.log(data);
        if(err){
            throw err
        }else{
            response.send({info: JSON.parse(data)})
        }
    })
})






let port = 1200;

app.listen(port,function(){
    console.log("You are listening to port " + port);
});
