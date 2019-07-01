const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

// Bind the Controllers into the server
const bookController = require ('./controllers/bookController');
const lendingsController = require('./controllers/LendingController');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Middleware to enable Angular access
app.use(cors());
app.use(logger("dev"));

bookController(app);
lendingsController(app);

app.listen(port, () => {
    console.log("bibliothekmanager server started on: " + port);
});
