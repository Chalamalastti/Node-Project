var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var GroupUser = require('/home/naajyothi/javascriptexamples/mean-stack-problem/routes/routes')
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Orgin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, OPTIONS, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});*/
app.use('/groupuser', GroupUser);


//app.use('/groupuser', GroupUser)


let port = 8080;
app.listen(port, function () {
    console.log("server is running at port" + port)
})
let dev_db_url = 'mongodb://localhost:27017';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));