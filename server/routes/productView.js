exp=require("express")
mj=require("mongojs")
var ObjectId = require('mongodb').ObjectID;
conn=mj("mongodb://myapp:Anusha450@ds249035.mlab.com:49035/myapp")

rout=exp.Router()

rout.post('/productDetails',function(req,res){
    data=req.body
    console.log("productView",data._id)
    conn.productdata.find({_id: ObjectId(data._id)},function(err,result){
        console.log(result)
        res.send(result)
    });
    // res.send("complited")
})


module.exports=rout;