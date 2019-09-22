exp=require("express")
mj=require("mongojs")
const appdata=require("../constant");

conn=mj(appdata.uri)

rout=exp.Router()

rout.post('/personalInfoUpdate',function(req,res){
    data=req.body
    conn.users.update({username:data.username},{$set:{firstname:data.firstname,lastname:data.lastname,gender:data.gender}},function(err,result){
        res.send(result)
        console.log(result)
    });
    // res.send("complited")
})




module.exports=rout;