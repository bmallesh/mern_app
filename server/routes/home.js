exp=require("express")
mj=require("mongojs")
conn=mj("mongodb://myapp:Anusha450@ds249035.mlab.com:49035/myapp")

rout=exp.Router()

rout.get('/getdata',function(req,res){
    console.log("getdata")
    conn.productdata.find(function(err,result){
        res.send(result)
        console.log(result)
    });
    // res.send("complited")
})


module.exports=rout;