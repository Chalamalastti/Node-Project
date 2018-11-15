var mongoose=require('mongoose');
//var User=require('/home/naajyothi/api_project/starter-node-angular/app/models/user.model')
var Schema = mongoose.Schema
let GroupSchema=new Schema({
    groupName:{type:String,required:true },
    groupNumber:{type:String,required:true },
    Status:{type:String,required:false},
    username:{type:String,required:true}
})
module.exports=mongoose.model('Group',GroupSchema);
