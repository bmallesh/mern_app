var appdata={
    companyName:"Myapp",
    get url(){
        return localStorage.getItem("url")
    },
    cartdata1:function (){
        if(localStorage.getItem('cart')){
            var cart = JSON.parse(localStorage.getItem('cart'))
            return cart.length;
            }else{
                return 0
            }
    },
    get cartdata(){
        return this.cartdata1();
    },
    // set cartdataset(value){
    //     this.cartdata1 = this.cartdata1+value
    // }
}
export default appdata;
