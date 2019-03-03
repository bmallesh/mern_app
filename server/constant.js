 const appdata={
    companyName:"Myapp",
    emailaddress:{
        user: 'myapp4354@gmail.com',
        pass: 'Anusha450@'
    },
    get forgotPwdContent(){
        return "You recently requested to reset your "+this.companyName+" account password."
    },
    forgotURL:"http://localhost:3000"
}
module.exports=appdata;
