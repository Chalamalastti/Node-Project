var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');
//app.use(cors())
/*app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,PATCH, OPTIONS');
    next();
  });*/
// var cors=new Enable
// app.use(cors());
 var corsOptions = {
     origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
   }
// // app.options('*', cors())

// user_controller=require('/home/naajyothi/api_project/starter-node-angular/public/js/controllers/user.controller')
// router.post('/createuser',user_controller.user_create);

var allowCrossDomain = function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Request-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Request-Methods', 'PATCH,PUT,POST,DELETE,GET,HEAD,OPTIONS');
  next();
 }

var group_controller = require('/home/naajyothi/javascriptexamples/mean-stack-problem/controllers/group.controller')
router.post('/creategroup',cors(corsOptions) , group_controller.group_create)
router.get('/groupdetails',cors(corsOptions), group_controller.group_details)
router.get('/:id', cors(corsOptions), group_controller.group_details_by_id)
router.patch('/groupupdate/:id',cors(corsOptions), group_controller.group_update)
router.delete('/delete/:id',cors(corsOptions), group_controller.group_delete)
module.exports = router
