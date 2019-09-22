var appdata={
    companyName:"Myapp",
    isLogined:false,
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
    get cart(){
        if(localStorage.getItem('cart')){
            var cart = JSON.parse(localStorage.getItem('cart'))
            return cart;
            }else{
                return []
            }
    },
    removeitem(index){
        var cart =  JSON.parse(localStorage.getItem('cart'))
        cart.splice(index,1)
        if(cart.length==0){
            localStorage.removeItem("cart")
        }else{
            localStorage.setItem("cart",JSON.stringify(cart))
        }
    }
}
export default appdata;
