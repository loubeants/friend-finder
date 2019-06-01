var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3030;
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.listen(PORT, function() {
          console.log("App listening on PORT " + PORT);
        });



// var path = require("path");





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);
       