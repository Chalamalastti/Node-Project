var Group=require('/home/naajyothi/javascriptexamples/mean-stack-problem/models/group.model')
exports.group_create = function (req, res) {
    console.log("I am from create")
    console.log(req.body)
    //res.send("This is from create user")
    let group = new Group(
        {
            groupName:req.body.groupName,
            groupNumber:req.body.groupNumber,
            Status:req.body.Status,
            username:req.body.username
        }
    );
   

    group.save(function (err) {
        if (err) {
            return res.send(err);
        }
        res.json(group+'User Created successfully')
        
    })
};
exports.group_details=function(req,res){
    Group.find(function(err,group){
        
        if(err){
            return res.send(err)
        }
       res.json(group)
       //console.log(group)
    })
}
exports.group_update=function(req,res){
    console.log("I am from update")
    Group.findByIdAndUpdate(req.params.id,{$set: req.body},function(err,group){
        console.log(req.body)
        if(err){
            return res.send(err)
        }
       res.send(" product updated successfully")
    })
}
exports.group_delete=function(req,res){
    console.log("I am from delete")
    Group.findByIdAndDelete(req.params.id,function(err,group){
        console.log(req.params.id)
        if(err){
            return res.send(err);
        }
        res.send(group+'group deleted successfully')
    })
}
exports.group_details_by_id=function(req,res){
    Group.findById(req.params.id,function(err,group){
        
        if(err){
            return res.send(err)
        }
        res.send(group+'group retrieved successfully');
    })
}
